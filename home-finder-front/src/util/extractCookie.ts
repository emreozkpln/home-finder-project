import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";

// Define the structure for the decrypted token.
interface DecryptToken {
    sub?: string;
    fullname?: string;
  }
  
  // Helper function to decrypt the token and return the needed property.
 export async function getDecryptedTokenProperty(property: keyof DecryptToken): Promise<string | undefined> {
    const token = (await cookies()).get("session")?.value;
    if (!token) {
      return undefined;
    }
  
    const payload = await decrypt(token);
    if (!payload) {
      return undefined;
    }
  
    // Return the specific property from the payload.
    return payload[property] as string | undefined;
  }

  export async function getDecryptedTokenProperties(properties: (keyof DecryptToken)[]): Promise<DecryptToken> {
    const token = (await cookies()).get("session")?.value;
    
    // Token mevcut değilse hata fırlatıyoruz.
    if (!token) {
      console.error("Session token bulunamadı.");
      return {};
    }
  
    // Token'ı çözümlemeye çalışıyoruz.
    const payload = await decrypt(token);
    
    // Token çözümleme başarısızsa hata fırlatıyoruz.
    if (!payload) {
      console.error("Token çözümleme başarısız oldu.");
      return {};
    }
  
    // İstenilen tüm özellikleri payload'dan döndürüyoruz.
    const result: DecryptToken = {};
    properties.forEach((property) => {
      result[property] = payload[property] as string | undefined;
    });
  
    return result;
  }
  
  // Usage in your code:
  let sub: DecryptToken = { sub: "" };
  sub.sub = await getDecryptedTokenProperty("sub") ?? "";
  
  let username: DecryptToken = { fullname: "" };
  username.fullname = await getDecryptedTokenProperty("fullname") ?? "";
  