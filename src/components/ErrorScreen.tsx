import { BOT_CONFIG } from '../api/client/config';

const ErrorScreen = () => {
  const telegramWebAppUrl = `https://t.me/${BOT_CONFIG.BOT_USERNAME}/${BOT_CONFIG.APP_NAME}`;

  return (
    <div
      className={`
        from-gray-950 to-gray-900 flex min-h-screen items-center justify-center bg-gradient-to-br
        p-4
      `}
    >
      <div className='text-center'>
        <div className='relative mb-8'>
          <div className='text-gray-800 text-8xl font-bold'>404</div>

          <div
            className={`
              absolute inset-0 animate-pulse bg-gradient-to-r from-blue-600 to-purple-600
              bg-clip-text text-8xl font-bold text-transparent
            `}
          >
            404
          </div>
        </div>

        <h2 className='mb-4 text-2xl font-semibold text-white'>
          Telegram User Not Found
        </h2>

        <a
          href={telegramWebAppUrl}
          target='_blank'
          rel='noopener noreferrer'
          className={`
            text-gray-400 mb-8 inline-block cursor-pointer underline decoration-dotted
            underline-offset-4 transition-colors duration-200
            hover:text-blue-400 hover:decoration-solid
          `}
        >
          <div
            className={`
              inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-6 py-3 text-blue-400
            `}
          >
            <i className='fab fa-telegram text-2xl'></i>

            <span>Open in Telegram</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ErrorScreen;
