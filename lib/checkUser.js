    import { currentUser } from "@clerk/nextjs/server"
    import { db } from "./prisma";
    import nodemailer from "nodemailer";
    import { sendWelcomeEmail } from "./mail";



    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // App password (not regular Gmail password)
        },
      });


    export const checkUser = async () =>{
        const user = await currentUser(); 

        if(!user){
            return null; 
        }

        try {
            const loggedInUser = await db.user.findUnique({
                where: {
                    clerkUserId: user.id
                }
            })

            if(loggedInUser){
                return loggedInUser; 
            }
            
            const name = `${user.firstName} ${user.lastName}`;
            const email = user.emailAddresses[0].emailAddress;
            console.log("email", email);

            const newUser = await db.user.create({
                data:{
                    clerkUserId: user.id,
                    name,
                    imageUrl: user.imageUrl,
                    email: user.emailAddresses[0].emailAddress,
                }
            });

            // await sendWelcomeEmail(user.emailAddresses[0].emailAddress, name);

            return newUser; 

        } catch (error){
            console.log(error.message);
            
        }
    }

