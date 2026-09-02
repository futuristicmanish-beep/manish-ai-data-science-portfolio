/**
 * PROJECT CASE STUDY PAGE
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Dynamic project case study page
 */

import { notFound } from "next/navigation";
import { Container, Section, Background, GradientOrb, Heading, Badge, Card, Divider } from "@/components/ui";
import { getProjectBySlug, getRelatedProjects, getNextProject, getPreviousProject, projects } from "@/data/projects";
import { ProjectNavigation, RelatedProjects, SkillsUsed, CaseStudyCTA, CaseStudyNav } from "@/components/projects";
import { ProjectViewTracker } from "@/components/analytics";
import { ArrowUpRight, AlertCircle, Lightbulb, TrendingUp, ExternalLink } from "lucide-react";
import { generateProjectMetadata, getProjectJsonLd } from "@/config/seo";
import type { Metadata } from "next";
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for each project page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return generateProjectMetadata({
    title: project.title,
    tagline: project.shortDescription,
    description: project.description,
    slug: project.slug,
    image: project.coverImage,
  });
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.id, 3);
  const previousProject = getPreviousProject(slug);
  const nextProject = getNextProject(slug);
  const caseStudy = project.caseStudy;

  // Build table of contents sections
  const tocSections = [];
  if (caseStudy) {
    if (caseStudy.problem) tocSections.push({ id: 'problem', label: 'The Problem' });
    if (caseStudy.solution) tocSections.push({ id: 'solution', label: 'The Solution' });
    if (caseStudy.architecture) tocSections.push({ id: 'architecture', label: 'Architecture & Approach' });
    if (caseStudy.challenges && caseStudy.challenges.length > 0) tocSections.push({ id: 'challenges', label: 'Challenges & Solutions' });
    if (caseStudy.outcome) tocSections.push({ id: 'outcome', label: 'Outcome & Impact' });
    if (caseStudy.learnings && caseStudy.learnings.length > 0) tocSections.push({ id: 'learnings', label: 'Key Learnings' });
    if (project.technologies.length > 0 || project.skills.length > 0) tocSections.push({ id: 'technologies', label: 'Technologies & Skills' });
  }

  // Generate JSON-LD for project
  const projectJsonLd = getProjectJsonLd({
    title: project.title,
    description: project.description,
    slug: project.slug,
    image: project.coverImage,
    technologies: project.technologies,
  });

  const statusColors = {
    concept: "text-[rgb(var(--color-secondary))] bg-[rgb(var(--color-secondary)/0.1)] border-[rgb(var(--color-secondary)/0.2)]",
    "in-development": "text-[rgb(var(--color-primary))] bg-[rgb(var(--color-primary)/0.1)] border-[rgb(var(--color-primary)/0.2)]",
    prototype: "text-[rgb(var(--color-accent))] bg-[rgb(var(--color-accent)/0.1)] border-[rgb(var(--color-accent)/0.2)]",
    completed: "text-[rgb(var(--color-success))] bg-[rgb(var(--color-success)/0.1)] border-[rgb(var(--color-success)/0.2)]",
    "learning-project": "text-[rgb(var(--color-accent))] bg-[rgb(var(--color-accent)/0.1)] border-[rgb(var(--color-accent)/0.2)]",
  };

  const statusLabels = {
    concept: "Concept",
    "in-development": "In Development",
    prototype: "Prototype",
    completed: "Completed",
    "learning-project": "Learning Project",
  };

  return (
    <>
      {/* Project View Tracking */}
      <ProjectViewTracker 
        projectSlug={project.slug} 
        projectTitle={project.title} 
      />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      
      <div className="relative">
        <Background variant="grid" />
        <GradientOrb position="top-right" color="primary" size="lg" />
        <GradientOrb position="bottom-left" color="secondary" size="lg" />

        <Section spacing="spacious">
          <Container size="default">
            <div className="space-y-16 pt-12">
              {/* Project Hero */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge variant="primary">Case Study</Badge>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full border ${statusColors[project.status]}`}>
                      {statusLabels[project.status]}
                    </span>
                  </div>

                  <Heading level={1} gradient>
                    {project.title}
                  </Heading>

                  <p className="text-xl text-[rgb(var(--color-muted-foreground))] max-w-3xl">
                    {project.description}
                  </p>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2">
                    {project.category.map((cat) => (
                      <Badge key={cat} variant="outline">
                        {cat}
                      </Badge>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Image */}
                {project.coverImage && (
                  <div className="relative w-full aspect-video rounded-[var(--radius-xl)] overflow-hidden border border-[rgb(var(--color-border))]">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                      priority
                    />
                  </div>
                )}
              </div>

              {/* Case Study Content */}
              {caseStudy && (
                <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-8 xl:gap-12">
                  {/* Main Content */}
                  <div className="space-y-16">
                  {/* Problem */}
                  {caseStudy.problem && (
                    <div id="problem">
                      <Card variant="default" className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[rgb(var(--color-primary)/0.1)] flex items-center justify-center">
                          <AlertCircle className="w-6 h-6 text-[rgb(var(--color-primary))]" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold text-[rgb(var(--color-foreground))]">
                            The Problem
                          </h3>
                          <p className="text-[rgb(var(--color-muted-foreground))] leading-relaxed">
                            {caseStudy.problem}
                          </p>
                        </div>
                      </div>
                    </Card>
                    </div>
                  )}

                  {/* Solution */}
                  {caseStudy.solution && (
                    <div id="solution">
                      <Card variant="default" className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[rgb(var(--color-primary)/0.1)] flex items-center justify-center">
                          <Lightbulb className="w-6 h-6 text-[rgb(var(--color-primary))]" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold text-[rgb(var(--color-foreground))]">
                            The Solution
                          </h3>
                          <p className="text-[rgb(var(--color-muted-foreground))] leading-relaxed">
                            {caseStudy.solution}
                          </p>
                        </div>
                      </div>
                    </Card>
                    </div>
                  )}

                  {/* Architecture */}
                  {caseStudy.architecture && (
                    <div className="space-y-6" id="architecture">
                      <Heading level={2}>Architecture & Approach</Heading>
                      <p className="text-[rgb(var(--color-muted-foreground))] leading-relaxed">
                        {caseStudy.architecture}
                      </p>
                    </div>
                  )}

                  {/* Challenges */}
                  {caseStudy.challenges && caseStudy.challenges.length > 0 && (
                    <div className="space-y-6" id="challenges">
                      <Heading level={2}>Challenges & Solutions</Heading>
                      <div className="space-y-4">
                        {caseStudy.challenges.map((challenge, index) => (
                          <Card key={index} variant="default" className="p-6">
                            <h4 className="font-semibold text-[rgb(var(--color-foreground))] mb-2">
                              {challenge.title}
                            </h4>
                            <p className="text-[rgb(var(--color-muted-foreground))] leading-relaxed">
                              {challenge.description}
                            </p>
                            {challenge.solution && (
                              <p className="text-[rgb(var(--color-primary))] mt-3 text-sm">
                                Solution: {challenge.solution}
                              </p>
                            )}
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Outcome */}
                  {caseStudy.outcome && (
                    <div id="outcome">
                      <Card variant="default" className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[rgb(var(--color-success)/0.1)] flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-[rgb(var(--color-success))]" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold text-[rgb(var(--color-foreground))]">
                            Outcome & Impact
                          </h3>
                          <p className="text-[rgb(var(--color-muted-foreground))] leading-relaxed">
                            {caseStudy.outcome}
                          </p>
                        </div>
                      </div>
                    </Card>
                    </div>
                  )}

                  {/* Learnings */}
                  {caseStudy.learnings && caseStudy.learnings.length > 0 && (
                    <div className="space-y-6" id="learnings">
                      <Heading level={2}>Key Learnings</Heading>
                      <div className="space-y-4">
                        {caseStudy.learnings.map((learning, index) => (
                          <Card key={index} variant="default" className="p-6">
                            <p className="text-[rgb(var(--color-muted-foreground))] leading-relaxed">
                              {learning}
                            </p>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills Demonstrated */}
                  {(project.technologies.length > 0 || project.skills.length > 0) && (
                    <div className="space-y-6" id="technologies">
                      <Heading level={2}>Technologies & Skills</Heading>
                      <SkillsUsed 
                        skills={project.skills}
                        technologies={project.technologies}
                      />
                    </div>
                  )}
                  </div>

                  {/* Sidebar Table of Contents - Desktop Only */}
                  {tocSections.length > 0 && (
                    <aside className="hidden lg:block">
                      <CaseStudyNav sections={tocSections} />
                    </aside>
                  )}
                </div>
              )}

              {/* Project Links */}
              {(project.demoUrl || project.githubUrl) && (
                <div className="flex flex-wrap gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-11 px-6 text-base font-medium rounded-[var(--radius-lg)] bg-[rgb(var(--color-primary))] text-[rgb(var(--color-primary-foreground))] hover:bg-[rgb(var(--color-primary-hover))] shadow-md hover:shadow-lg transition-all duration-[var(--duration-base)]"
                    >
                      View Live Project
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-11 px-6 text-base font-medium rounded-[var(--radius-lg)] bg-transparent text-[rgb(var(--color-foreground))] border border-[rgb(var(--color-border))] hover:bg-[rgb(var(--color-card))] hover:border-[rgb(var(--color-primary))] transition-all duration-[var(--duration-base)]"
                    >
                      View on GitHub
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              )}

              <Divider />

              {/* Call to Action */}
              <CaseStudyCTA 
                hasNextProject={nextProject !== null}
                hasRelatedProjects={relatedProjects.length > 0}
              />

              <Divider />

              {/* Navigation */}
              <ProjectNavigation
                previousProject={previousProject}
                nextProject={nextProject}
              />

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <>
                  <Divider />
                  <RelatedProjects projects={relatedProjects} />
                </>
              )}
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}
