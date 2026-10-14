import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {
  
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    navigate('/dashboard');
    // Connect your authentication API here.
    console.log("Login submitted:", { email });
    setEmail("");
    setPassword("");
    setError("");
  };

 


  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-200/70 lg:grid-cols-2">

        {/* LEFT SIDE — BRANDING */}
        <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 p-12 text-white lg:flex">
          {/* Decorative circles */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />

          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5" />

          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-extrabold text-blue-700">
                D
              </div>

              <span className="text-2xl font-bold tracking-tight">
                DevFlow
              </span>
            </Link>
          </div>

          <div className="relative z-10 my-16">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium">
              Welcome back 👋
            </span>

            <h1 className="mt-8 text-4xl font-extrabold leading-tight xl:text-5xl">
              Your next big idea starts here.
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-blue-100">
              Sign in to your account and continue building
              something amazing. Your workspace is waiting for you.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-700 bg-amber-200 font-bold text-amber-900">
                  A
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-700 bg-pink-200 font-bold text-pink-900">
                  S
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-700 bg-green-200 font-bold text-green-900">
                  M
                </div>
              </div>

              <p className="text-sm text-blue-100">
                <span className="font-semibold text-white">
                  Great ideas
                </span>
                <br />
                begin with a single step.
              </p>
            </div>
          </div>

          <div className="relative z-10 border-t border-white/20 pt-6 text-sm text-blue-200">
            © {new Date().getFullYear()} DevFlow. All rights reserved.
          </div>
        </section>

        {/* RIGHT SIDE — LOGIN FORM */}
        <section className="flex items-center justify-center px-6 py-10 sm:px-12 lg:px-10 xl:px-16">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <Link to="/" className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-extrabold text-white">
                D
              </div>

              <span className="text-2xl font-bold text-slate-900">
                Dev<span className="text-blue-600">Flow</span>
              </span>
            </Link>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Welcome Back
              </p>

              <h2 className="mt-3 text-3xl  
              font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Sign in to your account
              </h2>

              <p className="mt-3 text-slate-500">
                Enter your details to access your workspace.
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div
                role="alert"
                className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <div className="relative">
                  <svg
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>

                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setError("");
                    }}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <svg
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="4" y="10" width="16" height="11" rx="2" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  </svg>

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setError("");
                    }}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-14 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 accent-blue-600 focus:ring-blue-500"
                  />
                  Remember me
                </label>

                <span className="text-xs text-slate-400">
                  Secure sign in
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex cursor-pointer w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/30"
              >
                Sign In

                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14m-7-7 7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>

            {/* Register Link */}
            <p className="mt-8 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-blue-600 transition hover:text-blue-800"
              >
                Create an account
              </Link>
            </p>

            <div className="mt-10 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
              By signing in, you agree to our{" "}
              <Link to="/terms" className="underline hover:text-blue-600">
                Terms
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="underline hover:text-blue-600">
                Privacy Policy
              </Link>
              .
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;   