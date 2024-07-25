"use client";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

const ResultCard = ({ result }) => {
  return (
    <div className="group">
      <Card maxW="sm">
        <CardBody>
          <Link href={`/movie/${result.id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${
                result.backdrop_path || result.poster_path
              }`}
              width={500}
              height={300}
              className="group-hover:opacity-75 transition-opacity duration-300"
            />
          </Link>
          <Stack mt="6" spacing="3">
            <Heading size="md" className="line-clamp-1">
              {result.original_title || result.title || result.name}
            </Heading>
            <Text className="line-clamp-4 text-md">{result.overview}</Text>
            <Text color="blue.600" fontSize="xl">
              Released: {result.release_date || result.first_air_date}
            </Text>
            <Text color="blue.600" fontSize="xl" className="flex gap-2 items-center">
              <FiThumbsUp/>{result.vote_count}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </div>
  );
};

export default ResultCard;
