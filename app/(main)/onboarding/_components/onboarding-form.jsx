"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingSchema } from "../../lib/schema";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const OnboardingForm = ({ industries }) => {
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors }, setValue, watch, } = useForm(
        {
            resolver: zodResolver(onboardingSchema),
        }
    )

    const onSubmit = async (values) => {
        console.log(values)
    }

    const watchIndustry = watch("industry");

    return (
        <div className="flex items-center justify-center ">
            <Card className="w-full max-w-2xl mt-10 mx-2">
                <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animated-gradient">Complete Your Profile</CardTitle>
                    <CardDescription>Select Your Industry to get personalized career insights and recommendations.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-2">
                            <Label htmlFor="industry">Industry</Label>
                            <Select onValueChange={(value) => {
                                setValue("industry", value);
                                setSelectedIndustry(industries.find((ind) => ind.id === value))
                                setValue("subIndustry", "");
                            }} >
                                <SelectTrigger id="industry">
                                    <SelectValue placeholder="Select an Industry" />
                                </SelectTrigger>
                                <SelectContent>
                                    {industries.map((ind) => {
                                        return <SelectItem value={ind.id} key={ind.id}>{ind.name}</SelectItem>
                                    })}
                                </SelectContent>
                            </Select>
                            {
                                errors.industry && (
                                    <p className="text-sm text-red-500">
                                        {errors.industry.message}
                                    </p>
                                )
                            }
                        </div>

                        {watchIndustry && <div className="space-y-2">
                            <Label htmlFor="subIndustry">Specialization</Label>
                            <Select onValueChange={(value) => setValue("subIndustry", value)}>
                                <SelectTrigger id="subIndustry">
                                    <SelectValue placeholder="Select an Industry" />
                                </SelectTrigger>
                                <SelectContent>
                                    {selectedIndustry?.subIndustries.map((ind) => {
                                        return <SelectItem value={ind} key={ind}>{ind}</SelectItem>
                                    })}
                                </SelectContent>
                            </Select>
                            {
                                errors.subIndustry && (
                                    <p className="text-sm text-red-500">
                                        {errors.subIndustry.message}
                                    </p>
                                )
                            }
                        </div>}

                        <div className="space-y-2">
                            <Label htmlFor="experience">Years Of Experience</Label>

                            <Input id="experience" type="number" min="0" max="50" placeholder="Enter years of Experience" {...register("experience")} />
                            {
                                errors.experience && (
                                    <p className="text-sm text-red-500">
                                        {errors.experience.message}
                                    </p>
                                )
                            }
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="skills">Skills</Label>
                            <Input id="skills" placeholder="e.g. Python, JavaScript, Project Management" {...register("skills")} />
                            <p className="text-sm text-muted-foreground">Seperate Multiple skills with commas</p>

                            {
                                errors.skills && (
                                    <p className="text-sm text-red-500">
                                        {errors.skills.message}
                                    </p>
                                )
                            }
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bio">Professional Bio</Label>
                            <Textarea id="bio" placeholder="Tell us about your professional background..." className="h-32" {...register("bio")} />
                            {
                                errors.bio && (
                                    <p className="text-sm text-red-500">
                                        {errors.bio.message}
                                    </p>
                                )
                            }
                        </div>
                        <Button type="submit" className="w-full">Complete Profile</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default OnboardingForm
