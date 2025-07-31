import { Card } from "@/components/ui/card";

interface SocialPostProps {
  title: string;
  subtitle: string;
  number: string;
  year: string;
  imageUrl: string;
  className?: string;
}

const SocialPost = ({ 
  title, 
  subtitle, 
  number, 
  year, 
  imageUrl, 
  className = "" 
}: SocialPostProps) => {
  return (
    <Card className={`
      relative overflow-hidden bg-post border-post-border shadow-post 
      hover:shadow-glow transition-all duration-500 hover:scale-[1.02]
      w-full max-w-md aspect-[4/3] group
      ${className}
    `}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-social opacity-50" />
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="flex-1 relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-post/20 to-transparent" />
        </div>
        
        {/* Text Content */}
        <div className="flex-1 p-6 flex flex-col justify-center space-y-3 relative">
          {/* Accent Line */}
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-accent opacity-60" />
          
          {/* Number Badge */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-post-text-muted text-sm font-medium">
              {subtitle}
            </span>
            <span className="text-post-accent-blue text-sm font-bold">
              {number}
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-post-text-primary text-xl md:text-2xl font-bold leading-tight">
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-post-accent-pink text-base font-medium">
            {subtitle}
          </p>
          
          {/* Year and Number */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-post-text-muted text-sm">
              {number}
            </span>
            <span className="text-post-text-secondary text-sm font-medium">
              {year}
            </span>
          </div>
        </div>
      </div>
      
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-post-accent-blue/30 rounded-lg transition-all duration-300" />
    </Card>
  );
};

export default SocialPost;