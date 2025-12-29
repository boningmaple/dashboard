import { Loader2Icon, MailIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <main className="flex-1 flex flex-col gap-6 p-4 w-full max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold">Basic Input Types</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="text">Text</Label>
          <Input id="text" type="text" placeholder="Text" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Password" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="search">Search</Label>
          <Input id="search" type="search" placeholder="Search…" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="url">URL</Label>
          <Input id="url" type="url" placeholder="https://example.com" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="tel">Telephone</Label>
          <Input id="tel" type="tel" placeholder="+61 400 000 000" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="number">Number</Label>
          <Input id="number" type="number" placeholder="0" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="date">Date</Label>
          <Input id="date" type="date" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="time">Time</Label>
          <Input id="time" type="time" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="datetime">Datetime Local</Label>
          <Input id="datetime" type="datetime-local" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="month">Month</Label>
          <Input id="month" type="month" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="week">Week</Label>
          <Input id="week" type="week" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="color">Color</Label>
          <Input id="color" type="color" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="file">File</Label>
          <Input id="file" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="pattern">Pattern (Numbers only)</Label>
          <Input id="pattern" type="text" placeholder="123" pattern="[0-9]*" />
        </div>
      </div>
      <h2 className="text-xl font-semibold">States & Validation</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="disabled">Disabled</Label>
          <Input id="disabled" type="text" placeholder="Disabled" disabled />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="readonly">Read Only</Label>
          <Input id="readonly" type="text" defaultValue="Read only" readOnly />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="required">Required</Label>
          <Input
            id="required"
            type="text"
            placeholder="Required field"
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="loading">Loading</Label>
          <div className="relative">
            <Input
              id="loading"
              placeholder="Loading…"
              disabled
              className="pr-10"
            />
            <Loader2Icon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground" />
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="error">Error</Label>
          <Input
            id="error"
            placeholder="Invalid input"
            className="border-destructive focus-visible:ring-destructive"
          />
          <p className="text-sm text-destructive">This field is required.</p>
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="success">Success</Label>
          <Input
            id="success"
            placeholder="Valid input"
            className="border-green-500 focus-visible:ring-green-500"
          />
        </div>
      </div>
      <h2 className="text-xl font-semibold">Visual Variants</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="ghost">Ghost</Label>
          <Input
            id="ghost"
            placeholder="Ghost input"
            className="border-none bg-transparent shadow-none focus-visible:ring-0"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="filled">Filled</Label>
          <Input
            id="filled"
            placeholder="Filled input"
            className="bg-muted border-transparent focus:border-ring"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="outline">Outline</Label>
          <Input
            id="outline"
            placeholder="Outline input"
            className="border-2"
          />
        </div>
      </div>
      <h2 className="text-xl font-semibold">Input with Icon</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="email-icon">Email with Left Icon</Label>
          <div className="relative">
            <MailIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email-icon"
              type="email"
              placeholder="Email"
              className="pl-10"
            />
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="search-icon">Search with Right Icon</Label>
          <div className="relative">
            <Input
              id="search-icon"
              type="search"
              placeholder="Search…"
              className="pr-10"
            />
            <SearchIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
      </div>
      <h2 className="text-xl font-semibold">Input with prefix/suffix text</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="price">Currency prefix</Label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              $
            </span>
            <Input
              id="price"
              type="number"
              placeholder="0.00"
              className="pl-8"
            />
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="url-prefix">URL protocol prefix</Label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              https://
            </span>
            <Input
              id="url-prefix"
              placeholder="example.com"
              className="pl-15"
            />
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="phone-prefix">Country code prefix</Label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              +61
            </span>
            <Input
              id="phone-prefix"
              type="tel"
              placeholder="400 000 000"
              className="pl-12"
            />
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="weight">Unit suffix (kg, ms, px)</Label>
          <div className="relative">
            <Input
              id="weight"
              type="number"
              placeholder="0"
              className="pr-12"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              kg
            </span>
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="email-suffix">Email domain suffix</Label>
          <div className="relative">
            <Input id="email-suffix" placeholder="username" className="pr-24" />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              @company.com
            </span>
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="char-limit">
            {" "}
            Character limit suffix (Only visual)
          </Label>
          <div className="relative">
            <Input
              id="char-limit"
              maxLength={20}
              placeholder="Username"
              className="pr-12"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
              0 / 20
            </span>
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="range-prefix-suffix">
            {" "}
            Duration (Prefix + suffix together)
          </Label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              ~
            </span>
            <Input
              id="range-prefix-suffix"
              type="number"
              placeholder="0"
              className="pl-8 pr-12"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              ms
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
