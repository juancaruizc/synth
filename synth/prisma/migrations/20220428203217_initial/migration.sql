-- CreateTable
CREATE TABLE "Cohort" (
    "cohort_id" SERIAL NOT NULL,
    "game_name" TEXT NOT NULL,
    "students" INTEGER NOT NULL,
    "cohort_start_date" TIMESTAMP(3) NOT NULL,
    "cohort_end_date" TIMESTAMP(3) NOT NULL,
    "cohort_start_time" TIMESTAMP(3) NOT NULL,
    "facilitator_name" TEXT NOT NULL,

    CONSTRAINT "Cohort_pkey" PRIMARY KEY ("cohort_id")
);
