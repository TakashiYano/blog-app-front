import type { NextPage } from "next";
import { ChevronLeft } from "src/components/icon/ChevronLeft";
import { EmailIcon } from "src/components/icon/EmailIcon";
import { GoogleIcon } from "src/components/icon/GoogleIcon";
import { TwitterIcon } from "src/components/icon/TwitterIcon";
import { Button } from "src/components/shared/Button";

const SignUpPage: NextPage = () => {
  return (
    <div>
      <div className="w-screen h-screen bg-gray-200 dark:bg-gray-700">
        <Button button id="backButton" bgColor="transparent" className="absolute left-2">
          <ChevronLeft />
        </Button>
        <div className="flex flex-col justify-center h-screen">
          <div className="flex justify-center mb-16">
            <h1 className="text-4xl font-bold dark:text-white">Share Note</h1>
          </div>
          <Button
            linkProps={{ href: "/signup/email" }}
            id="emailButton"
            bgColor="transparent"
            borderColor="green"
            textColor="green"
            startIcon={<EmailIcon />}
            size="large"
            className="mx-auto my-4 w-96"
          >
            メールアドレスでアカウントを作成
          </Button>
          <Button
            button
            id="googleButton"
            bgColor="transparent"
            borderColor="red"
            textColor="red"
            startIcon={<GoogleIcon />}
            size="large"
            className="mx-auto my-4 w-96"
          >
            Googleでアカウントを作成
          </Button>
          <Button
            button
            id="twitterButton"
            bgColor="transparent"
            borderColor="blue"
            textColor="blue"
            startIcon={<TwitterIcon />}
            size="large"
            className="mx-auto my-4 w-96"
          >
            Twitterでアカウントを作成
          </Button>
          <div className="mt-4 text-center">
            <Button
              linkProps={{ href: "/login" }}
              id="green"
              bgColor="transparent"
              textColor="green"
              className="text-sm hover:underline"
            >
              ログインはこちら
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
