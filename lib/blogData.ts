export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage: string;
  featured: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "introduction-to-sustainable-web-development",
    title: "Introduction to Sustainable Web Development",
    excerpt: "Learn the fundamentals of building eco-friendly websites and why it matters for our planet's future.",
    content: `
# Introduction to Sustainable Web Development

The internet consumes approximately **416 TWh of electricity annually** — more than the entire United Kingdom. Every website, every click, every byte transferred contributes to this digital carbon footprint.

## Why Sustainable Web Development Matters

The ICT sector is responsible for about **2-4% of global carbon emissions**, comparable to the aviation industry. As developers, we have the power to reduce this impact through thoughtful design and development practices.

### The Hidden Environmental Cost

When a user visits your website:
- **Data centers** consume energy to store and serve your content
- **Network infrastructure** uses power to transmit data
- **User devices** drain battery to render your pages

Each of these steps has an environmental cost that adds up across millions of page views.

## Key Principles of Green Web Development

### 1. Reduce Page Weight
Every kilobyte matters. A lighter page means less data transferred, less energy consumed, and lower carbon emissions.

**Strategies:**
- Compress images and use modern formats (WebP, AVIF)
- Minify CSS, JavaScript, and HTML
- Remove unused code and dependencies
- Use system fonts when possible

### 2. Optimize Performance
Faster websites are greener websites. When pages load quickly, devices spend less time and energy processing them.

**Strategies:**
- Implement lazy loading for images and videos
- Use efficient caching strategies
- Minimize render-blocking resources
- Optimize Critical Rendering Path

### 3. Choose Green Hosting
Not all data centers are created equal. Some run on renewable energy, while others rely on fossil fuels.

**Look for:**
- Renewable energy certificates
- Carbon offset programs
- Energy-efficient infrastructure
- PUE (Power Usage Effectiveness) ratings

### 4. Design with Purpose
Every design decision has an environmental impact. Simpler designs with fewer elements typically require less energy to render.

**Consider:**
- Minimalist design approaches
- Dark mode options (saves energy on OLED screens)
- Reducing unnecessary animations
- Limiting autoplay media

## Measuring Your Impact

Tools like EcoPulse help you measure and understand your website's environmental impact. By tracking metrics like:
- Carbon emissions per page view
- Energy consumption
- Resource efficiency

You can make informed decisions about optimization priorities.

## Getting Started

1. **Audit your current site** — Use EcoPulse to establish a baseline
2. **Prioritize quick wins** — Start with image optimization and caching
3. **Set goals** — Aim for an 'A' rating and specific carbon reduction targets
4. **Monitor progress** — Regular testing helps track improvements
5. **Share knowledge** — Help others understand the importance of green web development

## Conclusion

Sustainable web development isn't just good for the planet — it's good for users (faster load times) and good for business (better SEO, lower hosting costs). 

Every optimization you make contributes to a greener internet. Start small, measure your progress, and keep improving.

---

*Ready to measure your website's environmental impact? [Try EcoPulse](/analyze) — it's free!*
    `,
    author: {
      name: "Mamun Rahaman",
      role: "Founder & Developer",
      avatar: "/avatars/mamun.jpg"
    },
    publishedAt: "2026-01-06",
    readTime: "8 min read",
    category: "Sustainability",
    tags: ["green web", "sustainability", "performance", "carbon footprint"],
    coverImage: "/sustainable.jpg",
    featured: true
  },
 
  {
    slug: "understanding-eco-scores",
    title: "Understanding Eco Scores: What They Mean and How to Improve",
    excerpt: "A deep dive into how EcoPulse calculates Eco Scores and actionable steps to achieve an 'A' rating.",
    content: `
# Understanding Eco Scores: What They Mean and How to Improve

The Eco Score is EcoPulse's way of quantifying website sustainability. But what goes into this number, and how can you improve it?

## How Eco Scores Are Calculated

The Eco Score (0-100) is based on several weighted factors:

### Page Size (40% weight)
- Under 1 MB: Excellent
- 1-2 MB: Good
- 2-3 MB: Average
- Over 3 MB: Needs improvement

### JavaScript Efficiency (25% weight)
The percentage of your page weight that's JavaScript:
- Under 20%: Excellent
- 20-30%: Good
- 30-40%: Average
- Over 40%: Needs improvement

### Third-Party Resources (20% weight)
External scripts, fonts, and assets:
- Under 10%: Excellent
- 10-20%: Good
- 20-30%: Average
- Over 30%: Needs improvement

### Resource Types (15% weight)
Balance of HTML, CSS, images, and other assets:
- Well-optimized mix scores higher
- Heavy reliance on any single resource type is penalized

## Score Grades Explained

| Grade | Score | Meaning |
|-------|-------|---------|
| A+ | 90-100 | Exceptional sustainability |
| A | 80-89 | Excellent - minimal impact |
| B | 60-79 | Good - room for improvement |
| C | 40-59 | Average - needs optimization |
| D | 20-39 | Poor - significant issues |
| F | 0-19 | Critical - immediate action needed |

## Improving Your Score

### Quick Wins (Days)
1. **Compress images** — Switch to WebP, compress at 80% quality
2. **Enable GZIP** — Server-side compression for text assets
3. **Remove unused CSS/JS** — Audit with Chrome DevTools

### Medium Effort (Weeks)
1. **Implement lazy loading** — For images and iframes
2. **Optimize fonts** — Subset fonts, use font-display: swap
3. **Review third-party scripts** — Remove unnecessary trackers

### Long-term Strategy (Months)
1. **Migrate to green hosting** — Choose renewable energy providers
2. **Redesign for efficiency** — Simpler designs load faster
3. **Implement caching** — Service workers, CDN caching

## Real-World Examples

### Before Optimization
- Page Size: 4.2 MB
- JavaScript: 45%
- Third-party: 35%
- **Eco Score: 32 (D)**

### After Optimization
- Page Size: 1.1 MB
- JavaScript: 22%
- Third-party: 12%
- **Eco Score: 84 (A)**

That's a **62% reduction in carbon emissions** per page view!

## Tracking Progress

1. **Establish baseline** — Run initial analysis
2. **Set targets** — Aim for specific score improvements
3. **Iterate** — Make changes, re-analyze, repeat
4. **Celebrate wins** — Share improvements with your team

## Conclusion

The Eco Score provides a clear, actionable metric for website sustainability. Focus on the biggest factors first, and you'll see your score climb.

---

*What's your Eco Score? [Find out now →](/analyze)*
    `,
    author: {
      name: "Mamun Rahaman",
      role: "Founder & Developer",
      avatar: "/avatars/mamun.jpg"
    },
    publishedAt: "2026-01-04",
    readTime: "7 min read",
    category: "Analysis",
    tags: ["eco score", "metrics", "carbon footprint", "improvement"],
    coverImage: "/ecoscore.png",
    featured: true
  },
  {
    slug: "green-hosting-providers-2026",
    title: "Top Green Hosting Providers in 2026",
    excerpt: "A comprehensive guide to choosing eco-friendly web hosting powered by renewable energy.",
    content: `
# Top Green Hosting Providers in 2026

Your choice of hosting provider can significantly impact your website's carbon footprint. Here's what to look for and who's leading the way.

## Why Green Hosting Matters

Data centers consume about **1% of global electricity**. By choosing green hosts, you can:
- Reduce your carbon footprint by up to 80%
- Support renewable energy infrastructure
- Meet sustainability commitments

## What Makes Hosting "Green"?

### Renewable Energy
- Solar, wind, hydro-powered data centers
- Renewable Energy Certificates (RECs)
- Power Purchase Agreements (PPAs)

### Energy Efficiency
- Low PUE (Power Usage Effectiveness) ratings
- Efficient cooling systems
- Modern, optimized hardware

### Carbon Offsetting
- Tree planting programs
- Carbon credit purchases
- Environmental initiatives

## Top Green Hosting Providers

### 1. GreenGeeks
- **300% renewable energy** match
- EPA Green Power Partner
- Carbon-reducing initiatives

### 2. A2 Hosting
- Carbon neutral since 2007
- FutureFund partnership
- Energy-efficient servers

### 3. Cloudflare
- Carbon neutral network
- Renewable energy commitment
- Global edge network efficiency

### 4. Google Cloud
- **100% renewable energy** matched
- Carbon neutral since 2007
- Industry-leading PUE

### 5. AWS (selected regions)
- Climate Pledge commitment
- Renewable energy projects
- Sustainability dashboard

## Evaluation Criteria

When choosing a host, consider:

1. **Transparency** — Do they publish energy data?
2. **Certifications** — Green certifications and audits
3. **Track record** — Long-term commitment to sustainability
4. **Performance** — Green shouldn't mean slow
5. **Location** — Data center proximity matters

## Making the Switch

### Before Migration
1. Audit current hosting energy usage
2. Research green alternatives
3. Test performance on new platform
4. Plan for minimal downtime

### During Migration
1. Keep old hosting active temporarily
2. Monitor performance closely
3. Update DNS gradually
4. Verify all functionality

### After Migration
1. Re-analyze with EcoPulse
2. Compare energy metrics
3. Document improvements
4. Share your sustainability story

## Cost Considerations

Green hosting often costs **similar to conventional hosting**. Some providers charge a small premium, but you get:
- Marketing value of sustainability
- Often better performance
- Future-proofed infrastructure
- Regulatory compliance

## Conclusion

Switching to green hosting is one of the most impactful changes you can make for website sustainability. Combined with optimization, it can reduce your carbon footprint by over 90%.

---

*See how your hosting affects your carbon footprint. [Analyze your site →](/analyze)*
    `,
    author: {
      name: "Mamun Rahaman",
      role: "Founder & Developer",
      avatar: "/avatars/mamun.jpg"
    },
    publishedAt: "2026-01-03",
    readTime: "6 min read",
    category: "Infrastructure",
    tags: ["hosting", "green hosting", "renewable energy", "data centers"],
    coverImage: "/green-hosting.webp",
    featured: false
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map(post => post.category)));
}

export function getAllTags(): string[] {
  return Array.from(new Set(blogPosts.flatMap(post => post.tags)));
}
