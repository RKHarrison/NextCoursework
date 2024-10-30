import React from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemmplate = () => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-slate-200">
          <Container>
            <Text className="text-lg">
              Welcome aboard! We&apos;re excited to have you as a new member of
              our community.
            </Text>
            <Link
              className="text-2xl text-cyan-700"
              href="https://example.com/sign-in"
            >
              Sign in
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemmplate;
