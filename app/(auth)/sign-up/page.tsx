import { SignUpForm } from "./signup-form";

export default function SignUpPage() {
  return (
    <section>
      <div className="space-y-10 rounded-xl bg-white p-10">
        <div>
          <h1 className="text-charcoal text-3xl font-bold">
            Create an account
          </h1>
          <p className="text-grey-dark">
            Let&apos;s get you started sharing your links!
          </p>
        </div>
        <SignUpForm />
      </div>
    </section>
  );
}
