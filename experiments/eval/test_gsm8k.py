import os
from dataclasses import field, dataclass
from typing import Optional, Any
import sys
import torch
import transformers
from transformers import AutoTokenizer, AutoModelForCausalLM
from itertools import groupby
import pdb
import re
import json
from tqdm import tqdm
from ml_collections import config_flags
import re
from datetime import datetime


def find_latest_files_by_topic(filenames):
    """
    Takes a list of filenames and returns the latest file for each topic.
    Filenames are expected to contain a topic and a timestamp in the format:
    'mistral_bbh_<number>_shots_<topic>_<date>-<time>.json'
    """
    latest_files = {}

    # Iterate over each filename
    for filename in filenames:
        split = filename.split('_')
        topic = 'gsm8k'
        date_time_str = split[-1][:-5]
        timestamp = datetime.strptime(date_time_str, '%Y%m%d-%H:%M:%S')
        
        # Update the dictionary if the current file is newer than the one stored
        if topic not in latest_files or timestamp > latest_files[topic][1]:
            latest_files[topic] = (filename, timestamp)

    # Extract just the filenames from the dictionary for output
    latest_filenames = {topic: data[0] for topic, data in latest_files.items()}
    
    return latest_filenames


def Prompting(prompt, model, tokenizer):

    print(prompt)

    inputs = tokenizer(prompt, return_tensors="pt").to("cuda")
    outputs = model.generate(**{'input_ids':inputs.input_ids, 'max_new_tokens':512})
    answer = tokenizer.decode(outputs[0]).replace('</s>', '').replace(prompt, '')

    index = answer.find("Question: ")
    answer = answer[:index].strip() if index != -1 else answer

    print(answer)

    try:
        answer = re.findall(r'####\s(.+)', answer)[0]
        prd = re.findall(r"\d+\,?\.?\d*",answer)[-1]
        prd = float(prd.replace(',', '').rstrip('.')) if prd else prd
        prd = int(prd)
        answer = int(prd)

    except:
        try:
            prd = re.findall(r"\d+\,?\.?\d*",answer)[-1]
            prd = float(prd.replace(',', '').rstrip('.')) if prd else prd
            answer = int(prd)
        except:
            answer = -1
    
    return answer

def extract_number(answer):
    answer = re.findall(r'####\s(.+)', answer)[0]
    prd = re.findall(r"\d+\,?\.?\d*",answer)[-1]
    prd = float(prd.replace(',', '').rstrip('.')) if prd else prd
    prd = int(prd)
    answer = int(prd)

    return answer


def main(argv):

    test_model_name_orginal = argv[0]
    few_shot = argv[1]
    steps = int(argv[2])
    training_number = int(argv[3])

    if test_model_name_orginal == 'mistral':
        test_model_name = "/mnt/workspace/workgroup/yiran/Mistral-7b-v0.2"
        model = AutoModelForCausalLM.from_pretrained(test_model_name, device_map='auto')
        tokenizer = AutoTokenizer.from_pretrained(test_model_name)
        directory = "../results/"
        files_in_directory = os.listdir(directory)
        filenames = [file for file in files_in_directory if file.endswith(".json")]
        filtered_filenames = [filename for filename in filenames if  'mistral_gsm8k_'+few_shot+'_shots' in filename]
        # filtered_filenames = [filename for filename in filenames if  'mistral_gsm8k_3_shots_20240508-15:41:40' in filename]
        latest_files = find_latest_files_by_topic(filtered_filenames)

    if test_model_name_orginal == 'gemma':
        test_model_name = "/mnt/workspace/workgroup/workgroup_v100/yiran/gemma-7b-it"
        model = AutoModelForCausalLM.from_pretrained(test_model_name, device_map='auto')
        tokenizer = AutoTokenizer.from_pretrained(test_model_name)
        directory = "../results/"
        files_in_directory = os.listdir(directory)

        filenames = [file for file in files_in_directory if file.endswith(".json")]
        filtered_filenames = [filename for filename in filenames if  'gemma2b_gsm8k_'+few_shot+'_shots' in filename]
        latest_files = find_latest_files_by_topic(filtered_filenames)

    if test_model_name_orginal == 'vicuna':
        test_model_name = "/mnt/workspace/workgroup/workgroup_intern/yiran/Vicuna-13b-v1.5"
        model = AutoModelForCausalLM.from_pretrained(test_model_name, device_map='auto')
        tokenizer = AutoTokenizer.from_pretrained(test_model_name)
        directory = "../results/"
        files_in_directory = os.listdir(directory)

        filenames = [file for file in files_in_directory if file.endswith(".json")]
        filtered_filenames = [filename for filename in filenames if  'vicuna_gsm8k_'+few_shot+'_shots' in filename]
        latest_files = find_latest_files_by_topic(filtered_filenames)

    if test_model_name_orginal == 'llama':
        test_model_name = "/mnt/workspace/workgroup/workgroup_v100/yiran/llama2-chat"
        model = AutoModelForCausalLM.from_pretrained(test_model_name, device_map='auto')
        tokenizer = AutoTokenizer.from_pretrained(test_model_name)
        directory = "../results/"
        files_in_directory = os.listdir(directory)

        filenames = [file for file in files_in_directory if file.endswith(".json")]
        filtered_filenames = [filename for filename in filenames if  'llama_gsm8k_'+few_shot+'_shots' in filename]
        latest_files = find_latest_files_by_topic(filtered_filenames)

    if test_model_name_orginal == 'yi-chat':
        test_model_name = "/mnt/workspace/workgroup/workgroup_intern/yiran/Yi-34B-chat"
        model = AutoModelForCausalLM.from_pretrained(test_model_name, device_map='auto')
        tokenizer = AutoTokenizer.from_pretrained(test_model_name)
        directory = "../results/"
        files_in_directory = os.listdir(directory)

        filenames = [file for file in files_in_directory if file.endswith(".json")]
        # filtered_filenames = [filename for filename in filenames if  'mistral_gsm8k_trans_'+few_shot+'_shots' in filename]
        filtered_filenames = [filename for filename in filenames if  'mistral_gsm8k_3_shots_20240509-14:25:04' in filename]
        latest_files = find_latest_files_by_topic(filtered_filenames)

    if test_model_name_orginal == 'mistral-moe':
        test_model_name = "/mnt/workspace/workgroup/workgroup_v100/yiran/mistral-moe"
        model = AutoModelForCausalLM.from_pretrained(test_model_name, device_map='auto')
        tokenizer = AutoTokenizer.from_pretrained(test_model_name)
        directory = "../results/"
        files_in_directory = os.listdir(directory)

        filenames = [file for file in files_in_directory if file.endswith(".json")]
        # filtered_filenames = [filename for filename in filenames if  'mistral_gsm8k_trans_'+few_shot+'_shots' in filename]
        filtered_filenames = [filename for filename in filenames if  'mistral_gsm8k_3_shots_20240509-14:25:04' in filename]
        latest_files = find_latest_files_by_topic(filtered_filenames)


    result = {}
    full_answer = {}


    test_set_path = directory + latest_files['gsm8k']

    print(test_set_path)
    

    with open(test_set_path, 'r') as file:
        data = json.load(file)
        data_question_set = data['controls']
        data_answer_set = data['correct_answer']

    test_set_1 = []
    test_set_2 = []
    test_set_4 = []
    test_set_8 = []
    for i in range(training_number):
        test_set_1.append(data_question_set[(steps+1)*i+1])
        test_set_2.append(data_question_set[(steps+1)*i+2])
        test_set_4.append(data_question_set[(steps+1)*i+4])
        test_set_8.append(data_question_set[(steps+1)*i+8])

    # Definitions for test sets and data answer sets
    test_sets = [test_set_1, test_set_2, test_set_4, test_set_8]
    # test_sets = [test_set_8]
    answer_sets = data_answer_set
    indices = [1, 2, 4, 8]
    # indices = [8]


    # Dictionary to store correct counts
    correct_counts = {index: 0 for index in indices}
    answer_collect = {index: [] for index in indices}

    topic = 'gsm8k'

    # Processing all test sets
    for i, index in tqdm(enumerate(indices)):
        for data in tqdm(test_sets[i]):

            answer = Prompting(data, model, tokenizer)
            answer_collect[index].append(answer)


            if answer == extract_number(answer_sets[test_sets[i].index(data)]):
                correct_counts[index] += 1


            print(answer)
            print(answer_sets[test_sets[i].index(data)])
        
            print(correct_counts)

        result[topic] = correct_counts
        full_answer[topic] = answer_collect

        current_time = datetime.now()
        time_string = current_time.strftime('%Y-%m-%d %H:%M:%S')

        with open('correct_counts_gsm8k_'+topic+'_'+time_string+'.json', 'w') as json_file:
            json.dump(result, json_file)

        with open('full_answer_gsm8k_'+topic+'_'+time_string+'.json', 'w') as json_file:
            json.dump(full_answer, json_file)


        



if __name__ == "__main__":
    main(sys.argv[1:])