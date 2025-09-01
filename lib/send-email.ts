"use server"

export async function sendContactEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string

  // In a real application, you would use a service like Resend, SendGrid, or Nodemailer
  // For now, we'll simulate the email sending and return success

  try {
    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would integrate with your email service
    console.log("Email would be sent to: info@richvilleprojectlimited.com")
    console.log("From:", firstName, lastName, email)
    console.log("Phone:", phone)
    console.log("Message:", message)

    return { success: true, message: "Thank you. Your message has been sent to RichVille Project Limited." }
  } catch (error) {
    return { success: false, message: "Failed to send message. Please try again." }
  }
}
