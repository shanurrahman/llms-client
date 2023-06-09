## 📦 llms-client - Connect to Multiple Language Models (LLMs)

A powerful package that enables users to effortlessly connect to various Language Models, including Claude, Bard, and ChatGPT. Stay tuned for upcoming support for Vicuna and Alpaca!

🔗 Get it on [npm](https://www.npmjs.com/package/llms-client)

#AI #Development #LLMs

## Installation

To install the package, use npm:

```bash
npm install llms-client
```

## Usage

To use the package, follow these steps:

1. Import and create an instance of the `CompletionServiceSelector` class, providing the appropriate adapter configuration. The adapter configuration should include the type of LLM, base URL, and API key.

   ```typescript
   import { CompletionServiceSelector, AdapterConfig } from 'llms-client';

   const adapterConfig: AdapterConfig = {
     type: 'chatGPT', // Specify the desired language model: 'chatGPT', 'claudeAI', or 'bard'
     baseurl: '<base-url>', // Set the base URL for the adapter
     apiKey: '<api-key>', // Set the API key for authentication
     model: '<model>', // Optional: Specify the model for the adapter (if applicable)
   };
   ```

2. Get chat completions by providing a list of messages and the maximum number of tokens in the completion response.

```ts
const messages: Message[] = [
  { role: "system", content: "Welcome!" },
  { role: "user", content: "Hello, how are you?" },
  { role: "assistant", content: "I'm doing well, thank you!" },
];

const { CompletionServiceSelector } = require("../dist/index");

async function completePrompt(prompt, maxTokens) {
  const config = {
    apiKey: "",
    baseurl: "https://api.openai.com",
    type: "chatGPT",
    model: "text-davinci-003",
  };

  const service = new CompletionServiceSelector(config);

  // only supports gpt-3.5-turbo
  const chat_completion = await service.getChatCompletions(messages, maxTokens);
  console.log({ chat_completion });
}

completePrompt("What is the purpose of life ?", 300)
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error(e);
  });
```

---

### Claude full example
```ts
const { CompletionServiceSelector } = require('../dist/index');

async function completePrompt(prompt, maxTokens) {
  const config = {
    apiKey: '',
    baseurl: 'https://api.anthropic.com/v1/complete',
    type: 'claudeAI',
    model: 'claude-v1'
  };

  const service = new CompletionServiceSelector(config);

  const completionResponse = await service.complete(prompt, maxTokens);
  console.log(completionResponse);

  /** 
   * the last message's content has to be left empty... This will be filled by claude 
   * */ 
  const messages = [
    { role: 'Human', content: 'Tell me a haiku about trees' },
    { role: 'Assistant', content: '' }
  ];

  const chatResponse = await service.getChatCompletions(messages, 300);
  console.log(chatResponse);
}

completePrompt('What is the capital of united states', 300)
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.error(e);
  });
```

3. Make a completion with a prompt by providing the prompt and the maximum number of tokens in the completion response.

   ```typescript
   const prompt = 'Hello, world!';
   completionService.complete(prompt, maxTokens)
     .then((response: string) => {
       // Handle the completion response
       console.log(response);
     })
     .catch((error: Error) => {
       // Handle errors
       console.error(error);
     });
   ```

## Available Scripts

The following scripts are available in the project's `package.json` file:

- `start`: Starts the development server in watch mode.
- `build`: Builds the package for production.
- `test`: Runs tests for the package.
- `lint`: Lints the package's source code.
- `prepare`: Builds the package before publishing or versioning.
- `size`: Checks the package size using size-limit.
- `analyze`: Analyzes the package size and provides reasons using size-limit.

You can run these scripts using npm. For example:

```bash
npm run build
```

## Usage examples
[GPT usage example](test/gpt.test.js)
[Claude(Anthropic) usage example](test/claude.test.js)
[Bard usage example](test/bard.test.js) Coming soon

## Configuration

The package can be configured using the `package.json` file. Some important fields include:

- `name`: The name of the package.
- `author`: The author of the package.
- `module`: The entry point for the package's ES module version.

## Contribution

Please follow the [Contribution Guide](CONTRIBUTING.md) for detailed instructions on how to contribute to this project.

## Contributors

Thank you to the following people for their contributions to this project:

* [Shanur Rahman](https://github.com/shanur-rahman) (shanur.cse.nitap@gmail.com)
* [Marzoog AlGhazwi](https://github.com/Marzoog-Alghazwi) (marzoog.m.alghazwi@gmail.com)

## License

This package is licensed under the MIT License.

## Author

This package was created by Shanur Rahman.