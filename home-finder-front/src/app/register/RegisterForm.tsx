"use client";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { register } from "./actions";
import Link from "next/link";

const RegisterForm = () => {
	const [state, loginAction] = useActionState(register, undefined);
	return (
		<div className="grid grid-cols-2">
			<div className="max-h-screen w-full">
				<img src="/auth-page-photo.png" className="object-cover w-full h-full" />
			</div>
			<div className="px-40 py-8 flex flex-col gap-20">
				<div className="flex flex-col gap-1">
					<div className="text-3xl font-semibold text-[#575A63]">Sign Up</div>
					<div className="text-sm text-[#c8c8ca]">Welcome!</div>
					<div className="text-sm text-[#c8c8ca]">You can register here</div>
				</div>
				<form action={loginAction} className="flex flex-col gap-11">
					<div className="flex flex-col gap-3">
						<div className="flex flex-col gap-2">
							<label htmlFor="firstname" className="font-bold text-[#676767]">
								Firstname
							</label>
							<input id="firstname" name="firstname" type="text" placeholder="Firstname" className="py-2 px-1 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder:text-sm placeholder:text-gray-300" />
						</div>
						{state?.errors?.firstname && <p className="text-red-500 font-semibold text-lg">{state.errors.firstname}</p>}
					</div>
					<div className="flex flex-col gap-3">
						<div className="flex flex-col gap-2">
							<label htmlFor="lastname" className="font-bold text-[#676767]">
								Lastname
							</label>
							<input id="lastname" name="lastname" type="text" placeholder="Lastname" className="py-2 px-1 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder:text-sm placeholder:text-gray-300" />
						</div>
						{state?.errors?.lastname && <p className="text-red-500 font-semibold text-lg">{state.errors.lastname}</p>}
					</div>
					<div className="flex flex-col gap-3">
						<div className="flex flex-col gap-2">
							<label htmlFor="email" className="font-bold text-[#676767]">
								Email
							</label>
							<input id="email" name="email" placeholder="Enter Email" className="py-2 px-1 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder:text-sm placeholder:text-gray-300" />
						</div>
						{state?.errors?.email && <p className="text-red-500 font-semibold text-lg">{state.errors.email}</p>}
					</div>
					<div className="flex flex-col gap-3">
						<div className="flex flex-col gap-2">
							<label htmlFor="email" className="font-bold text-[#676767]">
								Email
							</label>
							<input id="password" name="password" type="password" placeholder="Password" className="py-2 px-1 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder:text-sm placeholder:text-gray-300" />
						</div>
						{state?.errors?.password && <p className="text-red-500 font-semibold text-lg">{state.errors.password}</p>}
					</div>
					<div className="flex items-center justify-between">
						<Link href="/register" className="text-[#4B72FE] text-sm font-semibold hover:text-[#4b4bfe] hover:underline">
							Already have an account? <br />
							Log in here.
						</Link>
						<SubmitButton />
					</div>
				</form>
			</div>
		</div>
	);
};

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<button disabled={pending} type="submit" className="text-[#dfe7fb] bg-[#4B72FE] py-3 w-32 rounded-full text-sm font-semibold">
			Sign in
		</button>
	);
}

export default RegisterForm;
