"use server";

import React from "react";
import { Resend } from "resend";
import { renderAsync } from "@react-email/render";
import { validateString } from "../lib/utils";
import { getErrorMessage } from "../lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    const emailElement = React.createElement(ContactFormEmail, {
      message: message as string,
      senderEmail: senderEmail as string,
    });
    const html = await renderAsync(emailElement);

    data = await resend.emails.send({
      from: "Portfolio_Contact_Form<onboarding@resend.dev>",
      to: "slojkowski33@gmail.com",
      subject: "Message from contact form;",
      replyTo: senderEmail as string,
      html,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
