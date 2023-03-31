import { 
    ClerkProvider, 
    SignedIn, 
    SignedOut, 
    SignIn, 
    UserButton 
} from "@clerk/clerk-react";

export function SignInWrapped() {
    return (
        <ClerkProvider publishableKey={import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignIn />
            </SignedOut>
        </ClerkProvider>
    );
}