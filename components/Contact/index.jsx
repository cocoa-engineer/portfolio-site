import Image from "next/image";

export const Contact = () => {
  return (
    <div className="flex justify-center items-center py-32 px-2 h-48 bg-fixed bg-slate-200 bg-center bg-cover">
      <div className="text-stone-600 card glass lg:card-side">
        <div className="max-w-md card-body">
          <h2 className="card-title">CONTACT</h2>
          <p className="text-sm tracking-wider leading-5">
            ご質問、お仕事のご相談等、 お気軽にお問い合わせください。
            <br />
            Twitterでのご連絡お待ちしております。
          </p>
          <div className="card-actions">
            <a
              href="https://twitter.com/CocoaEngineer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 bg-stone-300 hover:bg-stone-50 rounded-full border-0 btn"
            >
              <Image
                src="/icon/twitter-brands.svg"
                width={16}
                height={16}
                alt="twitter"
              />
              <span className="ml-2 capitalize">Twitterはこちら</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
