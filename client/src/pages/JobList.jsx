import { useEffect, useState } from "react";
import { Container, SimpleGrid, Loader, Center } from "@mantine/core";
import Filters from "../components/Filters";
import JobCard from "../components/JobCard";
import { fetchJobs } from "../api/jobsApi";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getJobs = async () => {
    try {
      const res = await fetchJobs();
      setJobs(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <Container size="xl" py="lg">
      <Filters onFilter={getJobs} />
      {loading ? (
        <Center mt="lg"><Loader /></Center>
      ) : (
        <SimpleGrid cols={3} spacing="lg" mt="md">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
}
