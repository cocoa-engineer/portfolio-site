import Image from "next/image";

export const Card = (props) => {
  const { title, description, stack, image, url } = props;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="mx-auto w-72 h-96 text-center bg-white shadow-2xl transition duration-500 ease-in-out hover:scale-105 hover:-translate-y-1 hover:cursor-pointer card">
        <figure className="px-10 pt-10">
          <Image
            src={image}
            width={120}
            height={90}
            alt={`${title}-image`}
            objectFit="contain"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-xs text-gray-600">{description}</p>
          <div className="justify-center card-actions">
            <ul className="text-sm list-disc text-left">
              {stack.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </a>
  );
};
