export default function Footer() {
    return (
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-6">
          <div className="grid gap-4 md:grid-cols-4 text-center md:text-left">
            <div>
              <h3 className="font-semibold mb-2">About Us</h3>
              <p className="text-sm text-muted-foreground">
                We are dedicated to providing the best service to our customers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Email: info@example.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Street, City</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            © 2024 Your Company. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }
  
  