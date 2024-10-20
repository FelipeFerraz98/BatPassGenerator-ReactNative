export default function generatePass(){
    let password: string = ''
    const lowercase: string = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers: string = '0123456789';
    const symbols: string = '!@#$%&*?';

    // Concatenando todos os grupos de caracteres
    const characters = lowercase + uppercase + numbers + symbols;
    let passwordLength = 8
  
    for(let index = 0; index < passwordLength; index++){
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      )
    }
  
    return password
  }