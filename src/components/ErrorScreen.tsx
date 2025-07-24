import React from "react";
import { BOT_CONFIG } from "../config/api";

const ErrorScreen = () => {
  const telegramWebAppUrl = `https://t.me/${BOT_CONFIG.BOT_USERNAME}/${BOT_CONFIG.APP_NAME}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="text-8xl font-bold text-gray-800">404</div>
          <div className="absolute inset-0 text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            404
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Telegram User Not Found
        </h2>
        <a
          href={telegramWebAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-gray-400 hover:text-blue-400 mb-8 transition-colors duration-200 cursor-pointer underline decoration-dotted underline-offset-4 hover:decoration-solid"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-6 py-3 rounded-full">
            <i className="fab fa-telegram text-2xl"></i>
            <span>Open in Telegram</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ErrorScreen;
