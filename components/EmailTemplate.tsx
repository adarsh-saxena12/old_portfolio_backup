import React from "react";

import Image from "next/image";

import {    
 Html,
 Body,
 Head,
 Heading,
 Hr,
 Container,
 Preview,
 Section,
 Text,
} from '@react-email/components'

import { Tailwind } from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  message: string,
  email:string,
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,message,email
}) => {   
    
 return (
  <Html>
    <Head />
    <Preview>New message from your portfolio website.</Preview>
    <Tailwind>
        <Body className="bg-white p-4 rounded-xl">
            <Container>
                <Section>
                    
                    <Heading className="border-xl border-slate-500 rounded-xl bg-indigo-400 text-white text-center p-8 font-bold text-xl">You receive the following message from the contact form</Heading>
                    <Text className="font-bold text-black p-2">Hi Adarsh, </Text>
                    <Text className="font-bold text-black p-4"> {message} </Text>
                    <Hr className="text-black"/>
                    <Section>
                    <Text>Senders email is: {email}</Text>
                    <Text>Senders name is: {name}</Text>
                    </Section>
                </Section>

            </Container>
        </Body>
    </Tailwind>
  </Html>
)};

export default EmailTemplate;
