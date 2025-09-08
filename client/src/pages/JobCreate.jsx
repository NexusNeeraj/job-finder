import { Container, TextInput, Textarea, Select, Button, Group } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createJob } from "../api/jobsApi";

export default function JobCreate() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const formattedData = {
        ...data,
        salaryRange: { min: Number(data.minSalary), max: Number(data.maxSalary) },
      };
      await createJob(formattedData);
      reset();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container size="sm" py="lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <TextInput label="Job Title" {...register("jobTitle", { required: true })} />
        <TextInput label="Company Name" {...register("companyName")} />
        <TextInput label="Location" {...register("location")} />

        <Select
          label="Job Type"
          data={["Full-time", "Part-time", "Contract", "Internship"]}
          {...register("jobType")}
        />

        <Group grow>
          <TextInput label="Min Salary" type="number" {...register("minSalary")} />
          <TextInput label="Max Salary" type="number" {...register("maxSalary")} />
        </Group>

        <Textarea label="Job Description" {...register("jobDescription")} />
        <Textarea label="Requirements" {...register("requirements")} />
        <Textarea label="Responsibilities" {...register("responsibilities")} />

        <DateInput label="Application Deadline" {...register("applicationDeadline")} />

        <Group position="right" mt="md">
          <Button variant="default" onClick={() => reset()}>Save Draft</Button>
          <Button type="submit" color="indigo">Publish</Button>
        </Group>
      </form>
    </Container>
  );
}
