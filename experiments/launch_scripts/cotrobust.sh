#!/bin/bash

export WANDB_MODE=disabled

# Optionally set the cache for transformers
# export TRANSFORMERS_CACHE='YOUR_PATH/huggingface'

# Read arguments
export model=$1                # 'mistral', 'gemma' or 'llama'
export test_set=$2              # 'gsm8k', 'bbh' or 'mmlu'
export n_train_data=$3         # sampled number of each topic
export n_steps=$4              # number of edits
export batch_size=$5           # batch size
export few_shot=$6

# Create results folder if it doesn't exist
results_dir="../results"
if [ ! -d "$results_dir" ]; then
    mkdir "$results_dir"
    echo "Folder '$results_dir' created."
else
    echo "Folder '$results_dir' already exists."
fi

# if [ "$test_set" = "bbh" ]; then
#     echo "Usage: $1"
#     bbh_topics=("boolean_expressions" "causal_judgement" "date_understanding" "disambiguation_qa" "dyck_languages" "formal_fallacies" "geometric_shapes" "hyperbaton" "logical_deduction_five_objects" "logical_deduction_seven_objects" "logical_deduction_three_objects" "movie_recommendation" "multistep_arithmetic_two" "navigate" "object_counting" "penguins_in_a_table" "reasoning_about_colored_objects" "ruin_names" "salient_translation_error_detection" "snarks" "sports_understanding" "temporal_sequences" "tracking_shuffled_objects_five_objects" "tracking_shuffled_objects_seven_objects" "tracking_shuffled_objects_three_objects" "web_of_lies" "word_sorting")
#     # bbh_topics=("boolean_expressions" "causal_judgement")

#     # Iterate over each topic
#     for topic in "${bbh_topics[@]}"; do
#         # Run the Python script with the correct configuration
#         python -u ../main.py \
#                 --config="../configs/individual_${model}.py" \
#                 --config.attack="gcg" \
#                 --config.train_data="../../data/bbh/${topic}.json" \
#                 --config.result_prefix="../results/${model}_bbh_${few_shot}_shots_${topic}" \
#                 --config.n_train_data=$n_train_data \
#                 --config.data_offset=0 \
#                 --config.n_steps=$n_steps \
#                 --config.test_steps=1 \
#                 --config.batch_size=$batch_size \
#                 --config.test_set=$test_set \
#                 --config.few_shot=$few_shot \

#     done
#     python ../eval/test_bbh.py ${model} ${few_shot} $n_steps $n_train_data
# fi


if [ "$test_set" = "bbh" ]; then
    echo "Usage: $1"

    python -u ../main.py \
            --config="../configs/individual_${model}.py" \
            --config.attack="gcg" \
            --config.train_data="../../data/bbh.json" \
            --config.result_prefix="../results/${model}_bbh_${few_shot}_shots" \
            --config.n_train_data=$n_train_data \
            --config.data_offset=0 \
            --config.n_steps=$n_steps \
            --config.test_steps=1 \
            --config.batch_size=$batch_size \
            --config.test_set=$test_set \
            --config.few_shot=$few_shot \
    done
    python ../eval/test_bbh.py ${model} ${few_shot} $n_steps $n_train_data
fi

if [ "$test_set" = "gsm8k" ]; then
    echo "Usage: $1"

    python -u ../main.py \
            --config="../configs/individual_${model}.py" \
            --config.attack="gcg" \
            --config.train_data="../../data/gsm8k.jsonl" \
            --config.result_prefix="../results/${model}_gsm8k_${few_shot}_shots" \
            --config.n_train_data=$n_train_data \
            --config.data_offset=0 \
            --config.n_steps=$n_steps \
            --config.test_steps=1 \
            --config.batch_size=$batch_size \
            --config.test_set=$test_set \
            --config.few_shot=$few_shot \
    done
    python ../eval/test_gsm8k.py ${model} ${few_shot} $n_steps $n_train_data
fi

if [ "$test_set" = "mmlu" ]; then
    echo "Usage: $1"

    python -u ../main.py \
            --config="../configs/individual_${model}.py" \
            --config.attack="gcg" \
            --config.train_data="../../data/mmlu.json" \
            --config.result_prefix="../results/${model}_mmlu_${few_shot}_shots" \
            --config.n_train_data=$n_train_data \
            --config.data_offset=0 \
            --config.n_steps=$n_steps \
            --config.test_steps=1 \
            --config.batch_size=$batch_size \
            --config.test_set=$test_set \
            --config.few_shot=$few_shot \
    done
    python ../eval/test_mmlu.py ${model} ${few_shot} $n_steps $n_train_data
fi