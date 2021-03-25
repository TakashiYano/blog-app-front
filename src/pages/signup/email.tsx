import type { NextPage } from "next";
import { ChevronLeft } from "src/components/icon/ChevronLeft";
import { SignupForm } from "src/components/separate/SignupForm";
import { Button } from "src/components/shared/Button";

const Email: NextPage = () => {
  return (
    <div>
      <div className="w-screen h-screen bg-gray-200 dark:bg-gray-700">
        <Button button id="backButton" bgColor="transparent" className="absolute mx-auto my-4 left-2">
          <ChevronLeft />
        </Button>
        <SignupForm />
      </div>
    </div>
  );
};

export default Email;
