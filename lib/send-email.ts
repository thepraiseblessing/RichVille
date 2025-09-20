
import emailjs from '@emailjs/browser';

export async function sendContactEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string

  const templateId = "template_nv5cxsb"
  const publicKey = "Mi4vRb3wxdAHntP2M"
  const serviceId = "service_ypaem2w"

  
  try {

    const emailContent = {
      firstName,
      lastName,
      email,
      phone,
      message,
      to_email: "info@richvilleprojectlimited.com"
    }

    await emailjs.send(serviceId, templateId, emailContent, publicKey)


    
    return { success: true, message: "Thank you. Your message has been sent to RichVille Project Limited." }
  } catch (error) {
    return { success: false, message: "Failed to send message. Please try again." }
  }
}
