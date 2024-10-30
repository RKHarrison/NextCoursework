import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemmplate = () => {
    return (
        <Html>
            <Preview>Welcome aboard!</Preview>
            <Body>
                <Container>
                    <Text>
                        Welcome aboard! We're excited to have you as a new member of our community.
                    </Text>
                    <Link href='https://example.com/sign-in'>Sign in</Link>
                </Container>
            </Body>
        </Html>
    )

};

export default WelcomeTemmplate;
