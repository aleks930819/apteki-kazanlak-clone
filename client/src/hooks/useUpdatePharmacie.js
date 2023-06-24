import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { updatePharmacieBySlug } from '../services/apiPharmacies';

const useUpdatePharmacie = (slug) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading: editingLoading, mutate: updatePharmacie } = useMutation({
    mutationFn: (data) => updatePharmacieBySlug(slug, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['pharmacies'],
      });
      toast.success('Информацията аз аптеката е променена успешно!');
      navigate('/admin/pharmacies');
    },
    onError: (error) => toast.error(error.message),
  });

  return { updatePharmacie, editingLoading };
};

export default useUpdatePharmacie;
