export default function Video() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl aspect-video">
      <iframe
        src="https://www.youtube.com/embed/FJBRq3RCxkA?start=926"
        className="absolute top-0 left-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
