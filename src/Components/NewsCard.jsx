import { Eye, Share2, Bookmark } from "lucide-react";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  // Format date nicely
  const date = new Date(author.published_date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden ">
      {/* Author section */}
      <div className="flex justify-between items-center px-5 py-4 bg-base-200 ">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <Bookmark className="w-5 h-5 cursor-pointer hover:text-primary transition" />
          <Share2 className="w-5 h-5 cursor-pointer hover:text-primary transition" />
        </div>
      </div>

      {/* News content */}
      <div className="px-5 py-3">
        <h2 className="text-lg font-bold mb-3 leading-snug">{title}</h2>
        <figure>
          <img
            src={thumbnail_url}
            alt={title}
            className="rounded-xl w-full object-cover max-h-60"
          />
        </figure>

        <p className="text-sm text-gray-600 mt-3">
          {details.slice(0, 200)}...
          <span className="text-primary font-medium cursor-pointer hover:underline">
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="px-5 py-4 flex justify-between items-center border-t text-sm">
        <div className="flex items-center gap-1 text-warning">
          {Array.from({ length: rating.number }, (_, i) => (
            <span key={i}>⭐</span>
          ))}
          <span className="text-gray-700 font-medium ml-1">
            {rating.number.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <Eye className="w-4 h-4" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
