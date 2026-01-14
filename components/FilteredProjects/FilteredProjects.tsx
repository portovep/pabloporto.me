'use client';

import { useState, useMemo } from 'react';
import ProjectSummary from '../ProjectSummary/ProjectSummary';
import { Button } from '../ui/button';
import { ProjectData } from '../../lib/projects';
import { cn } from '../../app/lib/utils';

interface FilteredProjectsProps {
    projects: ProjectData[];
}

export default function FilteredProjects({ projects }: FilteredProjectsProps) {
    const [selectedRoles, setSelectedRoles] = useState<Set<string>>(new Set());

    const allRoles = useMemo(() => {
        const rolesSet = new Set<string>();
        projects.forEach((project) => {
            project.roles.forEach((role) => rolesSet.add(role));
        });
        return Array.from(rolesSet).sort();
    }, [projects]);

    const filteredProjects = useMemo(() => {
        if (selectedRoles.size === 0) {
            return projects;
        }
        return projects.filter((project) => project.roles.some((role) => selectedRoles.has(role)));
    }, [projects, selectedRoles]);

    const toggleRole = (role: string) => {
        setSelectedRoles((prev) => {
            const next = new Set(prev);
            if (next.has(role)) {
                next.delete(role);
            } else {
                next.add(role);
            }
            return next;
        });
    };

    const clearFilters = () => {
        setSelectedRoles(new Set());
    };

    return (
        <div>
            <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-sm font-medium text-gray-700">Filter by role:</span>
                    {allRoles.map((role) => {
                        const isSelected = selectedRoles.has(role);
                        return (
                            <Button
                                key={role}
                                variant={isSelected ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => toggleRole(role)}
                                className={cn(
                                    'transition-colors',
                                    isSelected &&
                                        '!bg-emerald-500 hover:!bg-emerald-600 !text-white !border-emerald-500'
                                )}
                                data-testid={`role-filter-${role.toLowerCase().replace(/\s+/g, '-')}`}
                                data-selected={isSelected.toString()}>
                                {role}
                            </Button>
                        );
                    })}
                    {selectedRoles.size > 0 && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={clearFilters}
                            className="text-sm text-gray-600 hover:text-gray-900"
                            data-testid="clear-filters">
                            Clear filters
                        </Button>
                    )}
                </div>
                {selectedRoles.size > 0 && (
                    <p className="text-sm text-gray-600" data-testid="filtered-count">
                        Showing {filteredProjects.length} of {projects.length} projects
                    </p>
                )}
            </div>
            <ul className="mt-10">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <li data-testid="project-summary" className="mb-10" key={project.id}>
                            <ProjectSummary project={project} />
                        </li>
                    ))
                ) : (
                    <li className="text-center py-10 text-gray-500" data-testid="no-projects-found">
                        No projects found matching the selected roles.
                    </li>
                )}
            </ul>
        </div>
    );
}
