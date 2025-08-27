import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface LoginDTO {
    email: string;
    password: string;
}

interface SignupDTO extends LoginDTO {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    confirmPassword: string
}

export default function Auth({ mode }: { mode: 'login' | 'signup' }) {

    const [authMode, setAuthMode] = useState<'login' | 'signup'>(mode ?? 'login');
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [passwordMismatch, setPasswordMismatch] = useState<boolean>(false);


    const handleAuthSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (authMode === 'signup') {
            if (password !== confirmPassword) {
                setPasswordMismatch(true);
                return;
            } else {
                setPasswordMismatch(false);
            }
            const authDTO: SignupDTO = {
                firstName,
                lastName,
                phoneNumber,
                email,
                password,
                confirmPassword
            }
            console.log(authDTO);


        } else {
            const authDTO: LoginDTO = {
                email,
                password
            }
            console.log(authDTO);
        }
    }

    return (
        <div className="auth-container">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                    <CardAction>
                        {authMode === 'login' ? <Button variant="link" onClick={() => setAuthMode('signup')}>Sign Up</Button> :
                            <Button variant="link" onClick={() => setAuthMode('login')}>Login</Button>}
                    </CardAction>
                </CardHeader>
                <form onSubmit={handleAuthSubmit}>
                    <CardContent>
                        <div className="flex flex-col gap-6">
                            {authMode === 'signup' && <div className="grid gap-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    type="text"
                                    placeholder="your first name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>}
                            {authMode === 'signup' && <div className="grid gap-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input
                                    id="lastName"
                                    type="text"
                                    placeholder="your last name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>}
                            {authMode === 'signup' && <div className="grid gap-2">
                                <Label htmlFor="phoneNumber">Phone number</Label>
                                <Input
                                    id="phoneNumber"
                                    type="text"
                                    placeholder="your phone number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />
                            </div>}
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    {authMode === 'login' && <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>}
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {authMode === 'signup' && <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                                </div>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                {passwordMismatch && <p className="form-error">Password does not match</p>}
                            </div>}
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 mt-5">
                        <Button type="submit" className="w-full">
                            {authMode === 'login' ? `Login` : `Signup`}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}
