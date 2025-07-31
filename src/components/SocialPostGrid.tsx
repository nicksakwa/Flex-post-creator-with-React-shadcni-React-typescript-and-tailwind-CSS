import SocialPost from "./SocialPost";

const SocialPostGrid = () => {
  const posts = [
    {
      title: "Class Warfare",
      subtitle: "The Anti-Patterns",
      number: "No. 4",
      year: "2025",
      imageUrl: "/lovable-uploads/da24dc13-cc5a-410e-ad89-4eff4933be2c.png"
    },
    {
      title: "Digital Revolution",
      subtitle: "Future Tech",
      number: "No. 5",
      year: "2025",
      imageUrl: "/lovable-uploads/da24dc13-cc5a-410e-ad89-4eff4933be2c.png"
    },
    {
      title: "Design Systems",
      subtitle: "Modern UI",
      number: "No. 6",
      year: "2025",
      imageUrl: "/lovable-uploads/da24dc13-cc5a-410e-ad89-4eff4933be2c.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Social Posts
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible and responsive social media post cards with modern design
          </p>
        </div>
        
        {/* Single Post Demo */}
        <div className="mb-16 flex justify-center">
          <div className="w-full max-w-2xl">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Featured Post
            </h2>
            <SocialPost
              title="Class Warfare"
              subtitle="The Anti-Patterns"
              number="No. 4"
              year="2025"
              imageUrl="/lovable-uploads/da24dc13-cc5a-410e-ad89-4eff4933be2c.png"
              className="mx-auto"
            />
          </div>
        </div>
        
        {/* Grid Layout */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-foreground text-center">
            Responsive Grid
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {posts.map((post, index) => (
              <SocialPost
                key={index}
                {...post}
                className="h-full"
              />
            ))}
          </div>
        </div>
        
        {/* Different Sizes Demo */}
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-semibold text-foreground text-center">
            Flexible Sizing
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Large Size */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-muted-foreground">Large</h3>
              <SocialPost
                {...posts[0]}
                className="w-full max-w-lg aspect-[3/2]"
              />
            </div>
            
            {/* Compact Size */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-muted-foreground">Compact</h3>
              <SocialPost
                {...posts[1]}
                className="w-full max-w-sm aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPostGrid;