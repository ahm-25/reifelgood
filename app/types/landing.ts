export interface NavItem {
  label: string
  href: string
}

export interface StatItem {
  value: string
  label: string
  change?: string
}

export interface FeatureItem {
  id: string
  title: string
  description: string
  icon: string
  tag?: string
  spanCol?: string
  spanRow?: string
  gradient?: string
  badge?: string
}

export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  monthlyPrice: number | string
  annualPrice: number | string
  popular?: boolean
  badge?: string
  ctaText: string
  features: PricingFeature[]
}

export interface TestimonialItem {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  rating: number
}

export interface FaqItem {
  id: string
  question: string
  answer: string
  category?: string
}

export interface TerminalLog {
  timestamp: string
  level: 'info' | 'success' | 'warn' | 'system'
  message: string
  latency?: string
}
