# Real-Time Socket.IO ID Display

This project demonstrates a simple application using **Socket.IO** and **EJS**. Upon clicking a button, the Socket.IO client connects to the server and displays the unique Socket ID on the page in real-time.

## Features

- Real-time connection with **Socket.IO**.
- Displays unique **Socket.IO ID** upon clicking a button.
- Built with **Node.js**, **Express**, **EJS**, and **Tailwind CSS**.

## Demo

![Demo](./img.png)

## Project Structure

```bash
├── public/             # Public files (e.g., client-side JavaScript, CSS)
|    └── views          # EJS templates
│        └── login.ejs  # Main template with the button to get Socket ID
├── package.json        # Project dependencies
├── server.js           # Node.js server with Socket.IO setup
└── README.md           # This file
```

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/thezohaibkhalid/Socket-io-id.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Socket-io-id
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open your browser and visit:

   ```bash
   http://localhost:9000
   ```

## Usage

- Click the "Click to Create" button on the page.
- The page will display the unique Socket.IO ID that is generated in real-time after establishing a connection to the server.

## Technologies Used

- **Node.js**
- **Express.js**
- **Socket.IO**
- **EJS** (for server-side templating)
- **Tailwind CSS** (for styling)

## Screenshot

Here is what the app looks like:

![Screenshot](./img.png)

## Contributing

Feel free to submit a pull request if you want to contribute to the project.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
