import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";  
import GitHubProvider from "next-auth/providers/github";
 
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
import bcrypt from "bcrypt";



export const NEXT_AUTH = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            name: { label: 'Name', type: 'text', placeholder: 'Name' },
            username: { label: 'Username', type: 'text', placeholder: 'abc123@gmail.com' },
            password: { label: 'password', type: 'password', placeholder: 'abc123' },
          },
          async authorize(credentials: any) {
              const hashedPassword = await bcrypt.hash(credentials.password,10);
              const existingUser = await prisma.user.findFirst({
                where: {
                  username : credentials.username
                }
              });

              if(existingUser) {
                const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password || " ");
                if(passwordValidation) {
                  return {
                    id: existingUser.id.toString(),
                    name: existingUser.name,
                    username: existingUser.username
                  }
                }
                return null;
              }

              try{
                const user = await prisma.user.create({
                  data: {
                    name:credentials.name,
                    username: credentials.username,
                    password: hashedPassword,
                  }
                });
                return {
                  id: user.id.toString(),
                  name: user.name,
                  username: user.username
                }
              }catch(e) {
                console.error(e);
              }
              return null
          },
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID || " ",
          clientSecret: process.env. GOOGLE_CLIENT_SECRET || " "
        }),
        // GitHubProvider({
        //   clientId: process.env.GITHUB_ID || " ",
        //   clientSecret: process.env.GITHUB_SECRET || " "
        // })
    ],
    secret: process.env.NEXTAUTH_SECRET || "secret",
    callbacks: {   
      jwt: ({token}:any)=> {
        token.userId = token.sub;
        console.log(token);
  
        return token;
      },
      session: ({session, token} : any) => {
        if(session && session.user) {
          session.user.id = token.userId
        }
        return session;
      }
    },
    pages: {
      signIn: "/signin"
    }
  }

//   async function googleSession() {
//     const session = await getServerSession(NEXT_AUTH);
    
//     if (session) {
//         // Check if the Google user already exists in the database
//         const existingUser = await prisma.user.findFirst({
//             where: {
//                 email: session.user.email, // Access email from session.user
//             },
//         });

//         if (existingUser) {
//             return {
//                 id: existingUser.id.toString(),
//                 name: existingUser.name,
//                 username: existingUser.email,
//             };
//         }

//         // If the user doesn't exist, create a new user in the database
//         try {
//             const newUser = await prisma.user.create({
//                 data: {
//                     name: session.user.name ?? 'Unknown', // Access name from session.user
//                     email: session.user.email ?? null,
//                     googleId: session.user.id, // Access id from session.user
//                 },
//             });

//             return {
//                 id: newUser.id.toString(),
//                 name: newUser.name,
//                 username: newUser.email,
//             };
//         } catch (error) {
//             console.error("Error creating user:", error);
//             return null;
//         }
//     } else {
//         console.error("No session found.");
//         return null;
//     }
// }
