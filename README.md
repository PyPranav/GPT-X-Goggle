# GPT X Google

**GPT X Google** is a powerful Chrome extension that seamlessly integrates ChatGPT responses directly into your Google search results. By enhancing the traditional search experience with AI-driven insights, this extension offers a more enriched and informative search result page, saving you time and providing deeper context to your queries.

## Features

- **Real-Time AI Responses**: As you search, GPT X Google fetches relevant responses from ChatGPT and displays them alongside your standard Google search results.
- **Enhanced Search Experience**: Access detailed explanations, summaries, and AI-generated insights without leaving the search page.
- **Seamless Integration**: The extension is designed to blend smoothly with the Google search interface, offering a clean and user-friendly experience.

## Screenshots

See how GPT X Google enhances your search results:

### Full Search Results Page

![Search Results](https://lh3.googleusercontent.com/pw/AMWts8CZukyRpeQssOF7W-XwJpqjEIsSqFuWkTNdir2HKv79bLhIIjF0ikaAqG3QxnS3_tm9XPSdJUb0wkBXUhp9f9CVrKWUaBzqac_smWs-D7-Lf8owCcRJjugAGpwIJxEqHTegfCiTQq58BfQcRZT77gc=w2936-h1302-no?authuser=0)

### ChatGPT Response Example

![ChatGPT Response](https://lh3.googleusercontent.com/pw/AMWts8CRnJkvkrsBPka_ZCsvxmIUZ0wcnBhmYRtb5vIcJU4-xj_ga_ocNLeczhpQE0Dv52x9J7iyDR3lI4AUkBmsRYtNfp9EjlNS86yJw3_2hm4INjxZ8Qvmk7m0Uoqwlfx1JBdYOIfRxUIpH7tCVNVQ4AA=w896-h732-no?authuser=0)

## Getting Started

Follow these instructions to get your GPT X Google extension up and running:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine.
- **OpenAI API Key**: You’ll need an API key from OpenAI to enable ChatGPT. You can obtain your key by signing up on the <a href="https://platform.openai.com/account/api-keys" target="_blank">OpenAI website</a>.

### Deployment

1. **Set Up Your API Key**:
   - Create a `.env` file in the `/backend` directory of your project.
   - Add your OpenAI API key to this file as follows:

```bash
  OPENAI_API_KEY="YOUR KEY GOES HERE"
```

2. **Start the Backend Server**:
   - Navigate to the backend directory:
   
```bash
  cd backend
```

   - Start the Node.js server:
   
```bash
  node index.js
```

3. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" at the top right.
   - Click "Load unpacked" and select the directory where your extension files are located.

4. **Enjoy an Enhanced Search Experience**:
   - Start using Google Search as usual, and see ChatGPT's insights appear alongside your results.

## Future Enhancements

- **Support for Additional Search Engines**: Expand beyond Google to integrate with other popular search engines like Bing or DuckDuckGo.
- **User Feedback Integration**: Allow users to provide feedback on the AI responses to continuously improve the quality of the output.
- **Mobile Browser Compatibility**: Develop a version compatible with mobile browsers to bring the same enhanced search experience to smartphones and tablets.


## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss the changes you'd like to make. For major changes, please open an issue first to discuss what you would like to change.
