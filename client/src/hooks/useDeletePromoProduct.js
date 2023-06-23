import { useQueryClient, useMutation } from '@tanstack/react-query';
import { deleteProductById } from '../services/apiPromoProducts';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useDeltePromoProduct = (id) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: deletingLoading, mutate: deleteProduct } = useMutation({
    mutationFn: () => deleteProductById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['promoProducts'],
      });

      toast.success('Продуктът е изтрит успешно!');
      navigate('/admin/promo-products');
    },
    onError: (error) => toast.error(error.message),
  });

  return { deleteProduct, deletingLoading };
};

export default useDeltePromoProduct;
