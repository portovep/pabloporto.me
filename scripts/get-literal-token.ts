#!/usr/bin/env node

/**
 * Script to get a Literal.club API access token
 * Usage: npx tsx scripts/get-literal-token.ts <email> <password>
 * Or set LITERAL_EMAIL and LITERAL_PASSWORD environment variables
 */

const LITERAL_API_URL = 'https://literal.club/graphql/';

const LOGIN_MUTATION = `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      email
      languages
      profile {
        id
        handle
        name
        bio
        image
      }
    }
  }
`;

interface LoginResponse {
    login: {
        token: string;
        email: string;
        languages: string[];
        profile: {
            id: string;
            handle: string;
            name?: string;
            bio?: string;
            image?: string;
        };
    };
}

async function getAccessToken(email: string, password: string): Promise<LoginResponse> {
    const response = await fetch(LITERAL_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: LOGIN_MUTATION,
            variables: {
                email,
                password
            }
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.errors) {
        throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
    }

    return result.data;
}

async function main() {
    const email = process.argv[2] || process.env.LITERAL_EMAIL;
    const password = process.argv[3] || process.env.LITERAL_PASSWORD;

    if (!email || !password) {
        console.error('Usage: npx tsx scripts/get-literal-token.ts <email> <password>');
        console.error('Or set LITERAL_EMAIL and LITERAL_PASSWORD environment variables');
        process.exit(1);
    }

    try {
        console.log('Logging in to literal.club...');
        const data = await getAccessToken(email, password);

        console.log('\n✅ Login successful!\n');
        console.log('Profile Information:');
        console.log(`  ID: ${data.login.profile.id}`);
        console.log(`  Handle: ${data.login.profile.handle}`);
        console.log(`  Name: ${data.login.profile.name || 'N/A'}`);
        console.log(`  Email: ${data.login.email}`);
        console.log(`\n🔑 Access Token (valid for 6 months):`);
        console.log(data.login.token);
        console.log('\n📝 Add this to your .env.local file:');
        console.log(`LITERAL_API_TOKEN=${data.login.token}`);
        console.log(`LITERAL_PROFILE_ID=${data.login.profile.id}`);
        console.log(`LITERAL_PROFILE_HANDLE=${data.login.profile.handle}`);
    } catch (error) {
        console.error('❌ Error:', error instanceof Error ? error.message : error);
        process.exit(1);
    }
}

main();
