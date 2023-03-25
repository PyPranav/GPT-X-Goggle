
# GPT X Google

A chrome extenstion that injects ChatGPT response into your google search results.



## Screenshots

![Screenshots](https://lh3.googleusercontent.com/pw/AMWts8CZukyRpeQssOF7W-XwJpqjEIsSqFuWkTNdir2HKv79bLhIIjF0ikaAqG3QxnS3_tm9XPSdJUb0wkBXUhp9f9CVrKWUaBzqac_smWs-D7-Lf8owCcRJjugAGpwIJxEqHTegfCiTQq58BfQcRZT77gc=w2936-h1302-no?authuser=0)

![Screenshots](https://lh3.googleusercontent.com/pw/AMWts8CRnJkvkrsBPka_ZCsvxmIUZ0wcnBhmYRtb5vIcJU4-xj_ga_ocNLeczhpQE0Dv52x9J7iyDR3lI4AUkBmsRYtNfp9EjlNS86yJw3_2hm4INjxZ8Qvmk7m0Uoqwlfx1JBdYOIfRxUIpH7tCVNVQ4AA=w896-h732-no?authuser=0)
## Deployment

To run the extension
first add a .env file inside /backend and place your openAI key as follows. [Get the key here!](https://platform.openai.com/account/api-keys)
```bash
  OPENAI_API_KEY="YOUR KEY GOES HERE"
```
Then start the server with:
```bash
  cd backend
  node index.js
```
Now just load the extension into a chromium browser.
