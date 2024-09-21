// import EmailTemplate from '@/components/EmailTemplate';

// import { Resend } from 'resend';

// interface reqProps {
//   name:string,
//   email:string,
//   message:string,
// }

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req:reqProps) {

//   console.log(req);
  
//   try {
//     const data = await resend.emails.send({
//       from: req.email,
//       to: ['saxenaadarsh35@gmail.com'],
//       subject: 'Contact',
//       react: EmailTemplate({ firstName: req.name }),
//       text:req.message
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }

