import { SignInForm } from "./signin-form";

export default function LoginPage() {
  return (
    <section>
      <div className="space-y-10 rounded-xl bg-white p-10">
        <div>
          <h1 className="text-charcoal text-3xl font-bold">Login</h1>
          <p className="text-grey-dark">
            Add your details below to get back into the app
          </p>
        </div>
        <SignInForm />
      </div>
    </section>
  );
}
