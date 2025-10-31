## Tools Installed

- Prettier (bun run format)
- ESLint (bun run lint)
- Astro (bun run dev)
- Tailwind CSS
- Lucide Icons
- TypeScript
- Shadcn UI (bun x shadcn-svelte@latest add <component-name>) - All components: https://www.shadcn-svelte.com/docs/components
- Access to ReactJs via Astro framework (any jsx component can be used)

## Project Structure

- `src/components/` - Reusable UI components
- `src/layouts/` - Layout templates for pages
- `src/pages/` - Individual page files
- `src/styles/` - Global styles and Tailwind configuration
- `public/` - Static assets like images and fonts

## Information for site

- We are creating a e-commerce website that sells sport clothing. We are competing against
  brands like Nike, Adidas, and Under Armour. The target audience is athletes and fitness enthusiasts who want a more exclusive and high-performance option for their sportswear needs.
- We are focusing on a hero/champion archetype for our brand identity, emphasizing strength, excellence, and the pursuit of greatness in sports.
- The website should have a modern, sleek design with a focus on high-quality imagery and bold typography. The color scheme should include strong, vibrant colors that evoke energy and power, while keeping minimalistic and clean to highlight the products.

# TASKS

- 1. Create a header that is visible across all routes/pages. This header should include:
  - Logo on the left side
  - Navigation links to Home, Shop, Blog, and Contact pages
  - A search bar for product searches
  - A shopping cart icon that shows the number of items in the cart
  - User account icon for login/signup
- 2. Create a footer that is visible across all routes/pages. This footer should include:
  - Links to About Us, Privacy Policy, Terms of Service, and Help Center
  - Social media icons linking to the brand's profiles (Facebook, Twitter, Instagram, LinkedIn)
  - Newsletter signup form with an email input and subscribe button
  - Copyright information and brand tagline
- 3. Ensure that both the header and footer are responsive and look good on both desktop and mobile devices.
- 4. Use Tailwind CSS for styling and ensure consistency with the overall design. Integrate any shadcn UI components, along with Lucid icons, as needed to enhance the visual appeal and functionality of the header and footer.

## Home Page

- The home page will be 2 main images, one half with male and one half with female athlete.
  These images will be clickable and lead to the shop page with pre-filtered items based on
  women or men.

## Error Pages

For all the following pages, implement a consistent layout and design that aligns with the overall website theme. Use clear and concise language to communicate the error or issue to the user, and provide helpful navigation options to guide them back to the main sections of the site.

- 400, 401, 403, 404, 500, 502, 503, 504
