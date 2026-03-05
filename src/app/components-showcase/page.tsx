'use client'

import { useState } from 'react'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Spinner } from '@/components/ui/spinner'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Toggle } from '@/components/ui/toggle'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { RainbowLoader } from '@/components/ui/spinner'
import { Calendar } from '@/components/ui/calendar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Combobox } from '@/components/ui/combobox'
import { EmptyState, EmptyStateContainer } from '@/components/ui/empty-state'
import { Item, ItemIcon, ItemContent, ItemLabel, ItemDescription, ItemAction } from '@/components/ui/item'
import { Carousel, CarouselItem } from '@/components/ui/carousel'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Sidebar, SidebarContent, SidebarNav, SidebarNavItem } from '@/components/ui/sidebar'
import { Sun, Moon, AlertCircle, CheckCircle, Search } from 'lucide-react'
import { InputGroup, InputGroupContent, InputGroupSuffix } from '@/components/ui/input-group'
import { KBD } from '@/components/ui/kbd'
import { toast } from 'sonner'

/**
 * Component Showcase Page
 *
 * This page demonstrates all available components in the design system.
 * Use this page to:
 * - Test components visually
 * - Verify responsive behavior
 * - See component interactions
 * - Check styling consistency
 *
 * Organization:
 * - Sections for different component types
 * - Clear labels and descriptions
 * - Copy-paste ready examples
 * - Production-ready styling
 *
 * IMPORTANT:
 * Navbar is rendered globally in layout.tsx.
 * Do NOT import it again inside pages.
 * Otherwise it will duplicate and render twice.
 */

export default function ComponentsShowcasePage() {
  const [toggleState, setToggleState] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar is already rendered by layout.tsx - do NOT import it here */}

      <main className="flex-1">
        <div className="mx-auto max-w-[1700px] px-4 sm:px-8 md:px-12 py-12">
          {/* Page Title */}
          <header className="mb-12">
            <h1 className="heading-h1 mb-4">Component Showcase</h1>
            <p className="body-text text-gray-600">
              A complete demonstration of all available components in the MSC Design System.
            </p>
          </header>

          {/* ===== SECTION 1: BUTTONS ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Buttons</h2>
            <Card>
              <CardHeader>
                <CardTitle className="heading-h4">Button Variants</CardTitle>
                <CardDescription>All button styles and sizes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Button Types */}
                  <div>
                    <p className="body-small font-semibold mb-3">Default Buttons</p>
                    <div className="flex flex-wrap gap-2">
                      <Button>Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Button Sizes */}
                  <div>
                    <p className="body-small font-semibold mb-3">Button Sizes</p>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                      <Button size="icon">🔍</Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Button States */}
                  <div>
                    <p className="body-small font-semibold mb-3">Button States</p>
                    <div className="flex flex-wrap gap-2">
                      <Button>Normal</Button>
                      <Button disabled>Disabled</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ===== SECTION 2: FORMS ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Form Elements</h2>
            <Card>
              <CardHeader>
                <CardTitle className="heading-h4">Input Fields & Controls</CardTitle>
                <CardDescription>Text inputs, checkboxes, and other form elements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 max-w-md">
                  {/* Input */}
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="mt-2" />
                  </div>

                  {/* Textarea */}
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" className="mt-2" rows={4} />
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="font-normal cursor-pointer">
                      I agree to the terms and conditions
                    </Label>
                  </div>

                  {/* Select */}
                  <div>
                    <Label htmlFor="framework">Select Framework</Label>
                    <Select value={selectedOption} onValueChange={setSelectedOption}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Choose one..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="react">React</SelectItem>
                        <SelectItem value="vue">Vue</SelectItem>
                        <SelectItem value="nextjs">Next.js</SelectItem>
                        <SelectItem value="svelte">Svelte</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ===== SECTION 3: CARDS ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Card Title</CardTitle>
                  <CardDescription>Card subtitle and description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="body-small">This is example card content with some descriptive text.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Feature Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-small mb-4">A card showcasing a key feature with details.</p>
                  <Button size="sm">Learn More</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Interactive Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-small mb-4">Card with interactive elements and actions.</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Cancel
                    </Button>
                    <Button size="sm">Submit</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ===== SECTION 4: TABS & ACCORDION ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Tabs & Accordion</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Tabs */}
              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Tabs</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="tab1">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                      <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1" className="mt-4">
                      <p className="body-text">Content for tab 1 with information and details.</p>
                    </TabsContent>
                    <TabsContent value="tab2" className="mt-4">
                      <p className="body-text">Content for tab 2 with different information.</p>
                    </TabsContent>
                    <TabsContent value="tab3" className="mt-4">
                      <p className="body-text">Content for tab 3 with additional content.</p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Accordion */}
              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Accordion</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Section 1 - Click to expand</AccordionTrigger>
                      <AccordionContent>
                        Expandable content for section 1 with details and information.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Section 2 - Click to expand</AccordionTrigger>
                      <AccordionContent>
                        Expandable content for section 2 with additional details.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Section 3 - Click to expand</AccordionTrigger>
                      <AccordionContent>
                        Expandable content for section 3 with more information.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ===== SECTION 5: DIALOGS ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Dialogs & Modals</h2>
            <Card>
              <CardHeader>
                <CardTitle className="heading-h4">Dialog Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {/* Regular Dialog */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogDescription>
                          This is a regular modal dialog with title, description, and actions.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="body-text">Add your content here.</p>
                      </div>
                      <div className="flex gap-2 justify-end">
                        <Button variant="outline">Cancel</Button>
                        <Button>Confirm</Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Alert Dialog */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">Alert Dialog</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Action</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to proceed? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ===== SECTION 6: STATUS & FEEDBACK ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Status & Feedback</h2>
            <div className="space-y-6">
              {/* Badges */}
              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Badges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge className="bg-green-600">Success</Badge>
                    <Badge className="bg-red-600">Error</Badge>
                    <Badge className="bg-yellow-600">Warning</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Progress Bar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="body-small mb-2">25% Complete</p>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div>
                    <p className="body-small mb-2">50% Complete</p>
                    <Progress value={50} className="h-2" />
                  </div>
                  <div>
                    <p className="body-small mb-2">100% Complete</p>
                    <Progress value={100} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Alerts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Alert variant="success">
                    <CheckCircle className="h-4 w-4" />
                    <AlertTitle>Item added successfully</AlertTitle>
                    <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Please check the marked fields</AlertTitle>
                    <AlertDescription>There was a problem, please check the indicated fields.</AlertDescription>
                  </Alert>
                  <Alert variant="warning">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>Please review this important message.</AlertDescription>
                  </Alert>
                  <Alert variant="info">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Info</AlertTitle>
                    <AlertDescription>This is an informational alert message.</AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ===== SECTION 7: AVATAR & TOOLTIP ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Avatar & Tooltip</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Avatars */}
              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Avatars</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                  </div>
                </CardContent>
              </Card>

                        {/* Tooltips */}
                            <Card>
                            <CardHeader>
                                <CardTitle className="heading-h4">Tooltips</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <TooltipProvider>
                                <div className="flex flex-wrap gap-4">
                                    <Tooltip>
                                    <TooltipTrigger asChild>
                                        {/* Blue rectangle button */}
                                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
                                        Hover
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Add to library</TooltipContent>
                                    </Tooltip>
                                </div>
                                </TooltipProvider>
                            </CardContent>
                            </Card>
                        </div>
                    </section>

          {/* ===== SECTION 8: INTERACTIVE CONTROLS ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Interactive Controls</h2>
            <Card>
              <CardHeader>
                <CardTitle className="heading-h4">Toggle & Spinner</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Toggle */}
                  <div>
                    <p className="body-small font-semibold mb-3">Toggle State: {toggleState ? 'ON' : 'OFF'}</p>
                    <Toggle
                      pressed={toggleState}
                      onPressedChange={setToggleState}
                      aria-label="Toggle feature"
                    >
                      {toggleState ? 'Enabled' : 'Disabled'}
                    </Toggle>
                  </div>

                  <Separator />

                  {/* Spinner */}
                  <div>
                    <p className="body-small font-semibold mb-3">Loading Indicator</p>
                    <Spinner />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Typography Section */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Typography System</h2>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h1 className="heading-h1">Heading H1 (50px)</h1>
                  <p className="body-tiny text-gray-500">Main page titles</p>
                </div>
                <Separator />
                <div>
                  <h2 className="heading-h2">Heading H2 (30px)</h2>
                  <p className="body-tiny text-gray-500">Section headers</p>
                </div>
                <Separator />
                <div>
                  <h3 className="heading-h3">Heading H3 (25px)</h3>
                  <p className="body-tiny text-gray-500">Subsection headers</p>
                </div>
                <Separator />
                <div>
                  <h4 className="heading-h4">Heading H4 (22px)</h4>
                  <p className="body-tiny text-gray-500">Card titles</p>
                </div>
                <Separator />
                <div>
                  <p className="body-text">Body text (20px) - Regular paragraph content goes here...</p>
                  <p className="body-tiny text-gray-500">Main content paragraphs</p>
                </div>
                <Separator />
                <div>
                  <p className="body-small">Body small (16px) - Secondary text for descriptions and captions.</p>
                  <p className="body-tiny text-gray-500">Secondary context</p>
                </div>
                <Separator />
                <div>
                  <p className="body-tiny">Body tiny (12px) - Metadata, timestamps, and fine print.</p>
                  <p className="body-tiny text-gray-500">Smallest text</p>
                </div>
              </CardContent>
            </Card>
          </section>



          {/* ===== SECTION 10: CALENDAR ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Calendar</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Date Picker</CardTitle>
                  <CardDescription>Select a date from the calendar</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Usage</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>Use Calendar for date selection in forms</p>
                  <p>Supports month/year navigation</p>
                  <p>Click dates to select or use keyboard</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ===== SECTION 11: TABLE ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Data Table</h2>
            <Card>
              <CardHeader>
                <CardTitle className="heading-h4">Example Table</CardTitle>
                <CardDescription>Clean data presentation with hover states</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Alice Johnson</TableCell>
                      <TableCell>Developer</TableCell>
                      <TableCell>Engineering</TableCell>
                      <TableCell><Badge>Active</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Bob Smith</TableCell>
                      <TableCell>Designer</TableCell>
                      <TableCell>Design</TableCell>
                      <TableCell><Badge variant="outline">Pending</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Carol Williams</TableCell>
                      <TableCell>Manager</TableCell>
                      <TableCell>Operations</TableCell>
                      <TableCell><Badge>Active</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>

          {/* ===== SECTION 12: COMBOBOX ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Combobox</h2>
            <Card>
              <CardHeader>
                <CardTitle className="heading-h4">Searchable Select</CardTitle>
                <CardDescription>Type to search and select options</CardDescription>
              </CardHeader>
              <CardContent>
                <Combobox
                  options={[
                    { label: "React", value: "react" },
                    { label: "TypeScript", value: "typescript" },
                    { label: "Next.js", value: "nextjs" },
                    { label: "Tailwind CSS", value: "tailwind" },
                    { label: "shadcn/ui", value: "shadcn" },
                  ]}
                  placeholder="Select a technology..."
                />
              </CardContent>
            </Card>
          </section>

          {/* ===== SECTION 13: EMPTY STATE ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Empty States</h2>
            <EmptyStateContainer>
              <EmptyState
                title="No Data Found"
                description="There are no items to display. Try adjusting your search or adding new items."
                action={<Button>Add Item</Button>}
              />
            </EmptyStateContainer>
          </section>

          {/* ===== SECTION 14: ITEMS/LIST ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">List Items</h2>
            <Card>
              <CardContent className="p-0">
                {[1, 2, 3].map((num) => (
                  <Item key={num}>
                    <ItemIcon>
                      <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center">
                        {num}
                      </div>
                    </ItemIcon>
                    <ItemContent>
                      <ItemLabel>Item {num}</ItemLabel>
                      <ItemDescription>Description for item {num}</ItemDescription>
                    </ItemContent>
                    <ItemAction>
                      <Button size="sm" variant="ghost">View</Button>
                    </ItemAction>
                  </Item>
                ))}
              </CardContent>
            </Card>
          </section>

          {/* ===== SECTION 15: CAROUSEL ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Carousel</h2>
            <Card>
              <CardHeader>
                <CardTitle className="heading-h4">Image Carousel</CardTitle>
                <CardDescription>Navigate through images with controls</CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel>
                  <CarouselItem className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <div className="text-center">
                      <h3 className="heading-h3">Slide 1</h3>
                      <p className="body-text">First slide content</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                    <div className="text-center">
                      <h3 className="heading-h3">Slide 2</h3>
                      <p className="body-text">Second slide content</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                    <div className="text-center">
                      <h3 className="heading-h3">Slide 3</h3>
                      <p className="body-text">Third slide content</p>
                    </div>
                  </CarouselItem>
                </Carousel>
              </CardContent>
            </Card>
          </section>

          {/* ===== SECTION 16: ASPECT RATIO ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Aspect Ratio</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">16:9</CardTitle>
                </CardHeader>
                <CardContent>
                  <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-blue-400 to-blue-600" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">1:1</CardTitle>
                </CardHeader>
                <CardContent>
                  <AspectRatio ratio={1} className="bg-gradient-to-br from-purple-400 to-purple-600" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">4:3</CardTitle>
                </CardHeader>
                <CardContent>
                  <AspectRatio ratio={4 / 3} className="bg-gradient-to-br from-orange-400 to-orange-600" />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ===== SECTION 17: SIDEBAR ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Sidebar Layout</h2>
            <Card>
              <CardContent className="p-0 flex h-64">
                <Sidebar className="border-r">
                  <SidebarContent>
                    <SidebarNav>
                      <SidebarNavItem href="#" className="bg-blue-50 text-blue-600">Dashboard</SidebarNavItem>
                      <SidebarNavItem href="#">Settings</SidebarNavItem>
                      <SidebarNavItem href="#">Users</SidebarNavItem>
                      <SidebarNavItem href="#">Reports</SidebarNavItem>
                    </SidebarNav>
                  </SidebarContent>
                </Sidebar>
                <div className="flex-1 p-6">
                  <h3 className="heading-h4">Main Content</h3>
                  <p className="body-text text-muted-foreground mt-2">Content goes here</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ===== SECTION 18: INPUT GROUP WITH KBD ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Input Group with KBD</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Search Input</CardTitle>
                  <CardDescription>Input group with search icon and keyboard shortcut</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <InputGroup className="w-full">
                    <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                    <InputGroupContent 
                      placeholder="Search components..."
                      className="pl-9"
                    />
                    <InputGroupSuffix>
                      <KBD>Ctrl K</KBD>
                    </InputGroupSuffix>
                  </InputGroup>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Keyboard Shortcuts</CardTitle>
                  <CardDescription>Display common keyboard shortcuts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Save</span>
                    <KBD>Ctrl S</KBD>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span>Find</span>
                    <KBD>Ctrl F</KBD>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span>Close</span>
                    <KBD>Esc</KBD>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ===== SECTION 19: TOAST ===== */}
          <section className="mb-12">
            <h2 className="heading-h2 mb-6">Toast Notifications</h2>
            <Card>
              <CardHeader>
                <CardTitle className="heading-h4">Toast Examples</CardTitle>
                <CardDescription>Click buttons to show toast notifications in the bottom right. Features include sharp boxed edges, system color scheme integration, and smooth transitions.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="mb-4 p-3 bg-gray-50 rounded-none border border-gray-300 text-sm text-gray-700">
                  <p className="font-semibold mb-2">Design Features:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Boxed edges with 2px borders and sharp corners</li>
                    <li>Primary blue for default toasts (#00A2ED)</li>
                    <li>Destructive red for error messages (#F04E1F)</li>
                    <li>Green for success notifications</li>
                    <li>Orange for warning messages</li>
                    <li>Smooth animations and transitions</li>
                    <li>Built with Sonner notification library</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <Button onClick={() => toast('Scheduled: Catch up', {
                    description: 'Friday, February 10, 2023 at 5:57 PM',
                  })} variant="outline">
                    Show Default Toast
                  </Button>
                  <Button onClick={() => toast.success('Item added successfully', {
                    description: 'The item has been added to your collection.',
                  })} variant="outline">
                    Show Success Toast
                  </Button>
                  <Button onClick={() => toast.error('Please check the marked fields', {
                    description: 'There was a problem with your submission. Please review and try again.',
                  })} variant="outline">
                    Show Error Toast
                  </Button>
                  <Button onClick={() => toast.warning('This action cannot be undone', {
                    description: 'Please make sure you want to proceed before confirming.',
                  })} variant="outline">
                    Show Warning Toast
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Final CTA */}
          <section className="mb-12 text-center">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="heading-h3">Ready to Build?</CardTitle>
                <CardDescription>Use these components to create your pages</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg">Get Started</Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
