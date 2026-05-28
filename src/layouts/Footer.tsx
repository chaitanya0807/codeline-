import React from 'react'
import { Container } from '../components/Container'

export function Footer() {
  const footerLinks = [
    {
      title: 'Products',
      links: ['Card Issuing', 'Core Banking', 'Payments', 'Accounts', 'Identity']
    },
    {
      title: 'Developers',
      links: ['Documentation', 'API Reference', 'Status', 'Changelog', 'GitHub']
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Blog', 'Press', 'Contact']
    },
    {
      title: 'Legal',
      links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Licenses']
    }
  ]

  return (
    <footer className="border-t border-border/50 bg-background pt-24 pb-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-24">
          
          <div className="col-span-2 md:col-span-2">
            <h2 className="text-7xl lg:text-9xl font-bold text-primary tracking-tighter leading-none mb-6">
              N7
            </h2>
            <p className="text-muted-foreground max-w-sm">
              The new foundation of modern banking. Built for the world's most innovative fintechs.
            </p>
          </div>

          {footerLinks.map((column, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h4 className="font-semibold">{column.title}</h4>
              <ul className="flex flex-col gap-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} N7 Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Twitter</a>
            <a href="#" className="hover:text-foreground">LinkedIn</a>
            <a href="#" className="hover:text-foreground">GitHub</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
