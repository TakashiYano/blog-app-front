const creatorValidation = (creator: string): string => {
  if (!creator) return "クリエイター名を入力してください";
  if (creator.length < 4) return "クリエイター名は4文字以上で入力してください";

  return "";
};

const emailValidation = (email: string): string => {
  if (!email) return "メールアドレスを入力してください";

  const regex = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!regex.test(email)) return "正しい形式でメールアドレスを入力してください";

  return "";
};

const passwordValidation = (password: string): string => {
  if (!password) return "パスワードを入力してください";

  const regex = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{6,}$/i;
  if (!regex.test(password)) return "半角英数字をそれぞれ1種類以上含む6文字以上でパスワードを入力してください";

  return "";
};

export class Validation {
  static formValidate = (type: string, value: string) => {
    switch (type) {
      case "creator":
        return creatorValidation(value);
      case "email":
        return emailValidation(value);
      case "password":
        return passwordValidation(value);
    }
  };
}
