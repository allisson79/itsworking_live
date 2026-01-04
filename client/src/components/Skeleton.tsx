interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  variant?: "text" | "title" | "image" | "card";
}

export function Skeleton({ className = "", width, height, variant = "text" }: SkeletonProps) {
  const variantClasses = {
    text: "skeleton skeleton-text",
    title: "skeleton skeleton-title",
    image: "skeleton skeleton-image",
    card: "skeleton skeleton-card",
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === "number" ? `${width}px` : width;
  if (height) style.height = typeof height === "number" ? `${height}px` : height;

  return <div className={`${variantClasses[variant]} ${className}`} style={style} />;
}

export function CardSkeleton() {
  return (
    <div className="service-card skeleton-card-container">
      <Skeleton variant="image" height={56} width={56} />
      <Skeleton variant="title" width="70%" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="90%" />
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="testimonial-card skeleton-card-container">
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="80%" />
      <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid #e0e0e0" }}>
        <Skeleton variant="text" width="40%" />
        <Skeleton variant="text" width="30%" />
      </div>
    </div>
  );
}
