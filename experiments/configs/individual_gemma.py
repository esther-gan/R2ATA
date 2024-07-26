import os

os.sys.path.append("..")
from configs.template import get_config as default_config

def get_config():
    
    config = default_config()

    config.result_prefix = 'results/individual_gemma'

    config.tokenizer_paths=["/mnt/workspace/workgroup/workgroup_v100/yiran/gemma-7b-it"]
    config.model_paths=["/mnt/workspace/workgroup/workgroup_v100/yiran/gemma-7b-it"]
    config.conversation_templates=['gemma']

    return config